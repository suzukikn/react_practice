import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入　propsに入っているcolorとchildrenを分割して変数に格納
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    // color: color プロパティと当てはめる名前が同じ場合は省略可能
    color,
    fontSize: "30px"
  };

  // タグで囲んだ中はchildrenのプロパティに入る
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
