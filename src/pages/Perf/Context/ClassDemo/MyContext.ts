import { MyContextType } from "@/types";
import { createContext } from "react";

// 需要注意的是，在class中context最好单独写在一个文件中，否则可能会出现报错：Cannot access 'MyContext' before initialization
export default createContext<MyContextType>({} as MyContextType);
