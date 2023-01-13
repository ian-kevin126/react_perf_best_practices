import { useCallback, useMemo, useRef } from "react";
import { delay, debounce, throttle } from "lodash";
import type { IUseRequestOption, IUseRequestRequest } from "./typings";
import type { AxiosResp } from "@/utils/request";

const defaultOption: IUseRequestOption = {
  debounce: false, // 是否开启防抖 时长
  debounceInterval: 1000,
  throttle: false, // 是否开启节流 时长
  throttleInterval: 1000,
  polling: false, // 是否轮询
  pollingInterval: 5000,
  autoRun: true, // 是否自动调用
  onFinish: undefined, // 调用完毕可执行的函数
};

const useHttp = <
  ParamType = any,
  PromiseRequestType = any,
  DataType = AxiosResp<PromiseRequestType>
>(
  PromiseRequest: (p: ParamType) => Promise<DataType>,
  params: ParamType,
  opt?: IUseRequestOption<DataType>
): IUseRequestRequest<ParamType, DataType> => {
  type Params = ParamType;
  // 合并配置项
  const option = Object.assign({}, defaultOption, opt);
  const loading = useRef(false);
  const data = useRef<DataType>();
  // 警告
  if (option.throttle && option.debounce) {
    console.warn(
      "[warn]: useRequest的配置项中的throttle和debounce均为true，请选择一个，否则这样默认使用防抖"
    );
  }

  // 调用方法
  const run = useCallback(async (): Promise<void> => {
    loading.current = true;
    // 调用请求方法
    data.current = await PromiseRequest(params);

    loading.current = false;
    option.onFinish && option.onFinish(data.current);
  }, [PromiseRequest, option, params]);

  const runParams = useCallback(
    async (_params: ParamType): Promise<void> => {
      loading.current = true;
      // 调用请求方法
      data.current = await PromiseRequest(_params);

      loading.current = false;
      option.onFinish && option.onFinish(data.current);
    },
    [PromiseRequest, option]
  );

  // 轮询
  const polling = async () => {
    loading.current = true;
    data.current = await PromiseRequest(params);
    loading.current = false;
    option.onFinish && option.onFinish(data.current);
    delay(polling, option.pollingInterval as number);
  };

  // 自动调用
  option.autoRun && run();
  // 是否轮询
  option.polling && polling();

  // 计算最终使用的函数
  const runComputed = useMemo(() => {
    // 判断是否开启防抖
    if (option.debounce) {
      return {
        run: debounce(run, option.throttleInterval) as () => Promise<void>,
        runParams: debounce(runParams, option.throttleInterval) as (
          p: Params
        ) => Promise<void>,
      };
    }

    // 判断是否开启节流
    if (option.throttle) {
      return {
        run: throttle(run, option.throttleInterval) as () => Promise<void>,
        runParams: throttle(runParams, option.throttleInterval) as (
          p: Params
        ) => Promise<void>,
      };
    }

    return { run, runParams };
  }, [
    option.debounce,
    option.throttle,
    option.throttleInterval,
    run,
    runParams,
  ]);

  return {
    run: runComputed.run,
    loading,
    data,
    runParams: runComputed.runParams,
  };
};

export default useHttp;
