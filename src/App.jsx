import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // ボタンがクリックされた時の関数
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        元気です！！
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// このファイルを別のコンポーネントで使用可能にする？
export default App;
