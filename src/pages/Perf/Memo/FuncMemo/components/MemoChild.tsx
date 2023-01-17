import { memo } from "react";

// export default memo(function MemoChild() {
//   console.log("render MemoChild");
//   return <div>MemoChild</div>;
// });

interface IProps {
  count: number;
}

function NoMemoChild(props: IProps) {
  const { count } = props;
  console.log("1，render NoMemoChild");
  return <div>{count}</div>;
}

const MemoChild = memo((props: IProps) => {
  const { count } = props;
  console.log("2，render MemoChild");
  return <div>{count}</div>;
});

export { NoMemoChild, MemoChild };
