import http from "@/utils/request";
import { IGetParams, IGetRes } from "./types";
import useHttp from "@/utils/request/hooks";

export const getMenuList = (data?: IGetParams) => {
  return http<IGetParams, IGetRes>({
    url: "/menu/getMenu",
    method: "GET",
    data,
  });
};

export const useGetMenuList = (data?: IGetParams) => {
  return useHttp<IGetParams | undefined>(getMenuList, data);
};
