import { Dispatch, SetStateAction, createContext } from "react";

export const ContextValue = createContext<boolean>(false);
export const ContextAction = createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);

const Context = {
  ContextValue,
  ContextAction,
};

export default Context;
