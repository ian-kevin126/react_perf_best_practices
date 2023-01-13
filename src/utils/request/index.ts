import Request from "./request";
import { AxiosResponse } from "axios";
import { RequestConfig } from "./typings";

export interface AxiosResp<T> {
  statusCode: number;
  desc: string;
  result: T;
}

// 重写返回类型
interface AxiosReqConfig<T, R> extends RequestConfig<AxiosResp<R>> {
  data?: T;
}

const request = new Request({
  baseURL:
    "https://www.fastmock.site/mock/91a5ab303c12f5e68d57724e7e6e7b0c/api",
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config: any) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {AxiosReqConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const http = <D = any, T = any>(config: AxiosReqConfig<D, T>): Promise<any> => {
  const { method = "GET" } = config;
  if (method === "get" || method === "GET") {
    config.params = config.data;
  }
  return request.request<AxiosResp<T>>(config);
};

// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url);
};

// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest();
};

export default http;

/*
<script setup lang="ts">
// app.vue
import request from './service'
import { onMounted } from 'vue'

interface Req {
  apiKey: string
  area?: string
  areaID?: string
}
interface Res {
  area: string
  areaCode: string
  areaid: string
  dayList: any[]
}
const get15DaysWeatherByArea = (data: Req) => {
  return request<Req, Res>({
    url: '/api/common/weather/get15DaysWeatherByArea',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')

        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      },
    },
  })
}
onMounted(async () => {
  const res = await get15DaysWeatherByArea({
    apiKey: import.meta.env.VITE_APP_KEY,
    area: '北京市',
  })
  console.log(res.result.dayList)
})
</script>

取消请求
<template>
  <el-button
    @click="cancelRequest('/api/common/weather/get15DaysWeatherByArea')"
    >取消请求</el-button
  >
  <el-button @click="cancelAllRequest">取消全部请求</el-button>
  <router-view></router-view>
</template>
<script setup lang="ts">
import request, { cancelRequest, cancelAllRequest } from './service'
</script>
*/
