import { Dispatch, SetStateAction } from "react";

export interface UserInfo {
  name: string;
  age: number;
}

export interface UserListItem {
  name: string;
  age: number;
  address: string;
}

export interface GoodsInfo {
  goodsName: string;
  price: number;
  quantity: number;
}

export interface AppContextProps {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  goodsInfo: GoodsInfo;
  setGoodsInfo: Dispatch<SetStateAction<GoodsInfo>>;
}

export interface MyContextType {
  userInfo: UserInfo;
  goodsInfo: GoodsInfo;
}

export type MenuTableProps = {
  ID?: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  path?: string;
  name?: string;
};
