import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { MutableRefObject } from "react";

export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}

export interface CancelRequestSource {
  [index: string]: () => void;
}

export interface IUseRequestOption<T = any> {
  // 是否开启防抖 时长
  debounce?: boolean;
  debounceInterval?: number;
  // 是否开启节流 时长
  throttle?: boolean;
  throttleInterval?: number;
  // 是否轮询
  polling?: boolean;
  pollingInterval?: number;
  // 是否自动调用
  autoRun?: boolean;
  // 调用完毕可执行的函数
  onFinish?: (data: T) => void;
}

export interface IUseRequestRequest<D, T> {
  loading: MutableRefObject<boolean>;
  data: MutableRefObject<T | undefined>;
  run: (...args: any[]) => Promise<void>;
  runParams: (params: D) => Promise<void>;
}

export interface IWhyRequest<T> {
  code: number;
  data: T;
}
