export const Practices3 = () => {
  const getTototalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractices3 = () => {
    let total: number = 0;
    total = getTototalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題3：変数の型指定</p>
      <button onClick={onClickPractices3}>練習問題3実行</button>
    </div>
  );
};
