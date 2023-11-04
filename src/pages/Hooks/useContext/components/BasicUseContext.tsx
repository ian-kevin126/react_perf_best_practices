import { Card } from "antd";
import { createContext, useContext } from "react";

interface CurrentUserContextType {
  username: string;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

// 还可以使用非空断言来获得相同的结果
// const CurrentUserContext = createContext<CurrentUserContextType>(null!);

// 另一种选择是使用空对象作为默认值并将其转换为预期的上下文类型：
// const CurrentUserContext = createContext<CurrentUserContextType>(
//   {} as CurrentUserContextType
// );

const useCurrentUser = () => {
  const currentUserContext = useContext(CurrentUserContext);

  // 最好不必检查null，因为我们知道上下文不会是null。一种方法是提供自定义挂钩以使用上下文，如果未提供上下文，则会抛出错误：
  if (!currentUserContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};

export const BasicUseContext: React.FC = () => {
  const ctx = useCurrentUser();
  console.log("ctx", ctx);
  return (
    <Card title="BasicUseContext">
      <div>{ctx.username}</div>
      {/* 避免必须检查的另一种方法null是使用类型断言告诉 TypeScript 你知道上下文不是null */}
      <div>{ctx!.username}</div>
    </Card>
  );
};

export default BasicUseContext;
