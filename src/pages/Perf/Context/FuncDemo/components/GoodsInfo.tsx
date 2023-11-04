import { memo, useContext } from "react";
import { AppContext } from "..";
import { Button, Card } from "antd";
import { isEqual } from "lodash";

const GoodsInfo: React.FC = () => {
  const { goodsInfo, setGoodsInfo } = useContext(AppContext);

  const handleChangeGoodsInfo = (value: string) => {
    setGoodsInfo({
      ...goodsInfo,
      goodsName: value,
    });
  };

  console.log("render goodsInfoComp - 1");
  return (
    <Card title="GoodsInfo">
      <div>{goodsInfo.goodsName}</div>
      <div>{goodsInfo.price}</div>
      <div>{goodsInfo.quantity}</div>
      <Button onClick={() => handleChangeGoodsInfo("iphone")}>
        不改变GoodsInfo
      </Button>
      <Button onClick={() => handleChangeGoodsInfo("OPPO")}>
        改变goodsInfo: OPPO
      </Button>
    </Card>
  );
};

function isPropsEqual(prevProps: any, nextProps: any): boolean {
  console.log("【goodsInfo】prevProps", prevProps);
  console.log("【goodsInfo】nextProps", nextProps);
  return isEqual(prevProps.userInfo, nextProps.userInfo);
}

export default memo(GoodsInfo, isPropsEqual);
