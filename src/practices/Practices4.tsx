export const Practices4 = () => {
  const calcTototalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractices4 = () => {
    calcTototalFee(1000);
  };
  return (
    <div>
      <p>練習問題4：設定ファイルを触ってみる</p>
      <button onClick={onClickPractices4}>練習問題4実行</button>
    </div>
  );
};
