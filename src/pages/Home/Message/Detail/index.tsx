import { useMatch, useParams } from "react-router-dom";

export default function Detail() {
  // 1. 调用 useParams() hooks，获取传递过来的 params 参数，返回一个参数对象，可以通过解构得出数据
  const { id, title, content } = useParams();

  // 2. 调用 useMatch() hooks，传入完成路径，也可以获取到 params 参数，但是不常用
  const data = useMatch("/home/message/detail/:id/:title/:content");
  console.log(data);
  return (
    <div>
      <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
      </ul>
    </div>
  );
}
