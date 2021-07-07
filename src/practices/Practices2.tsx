export const Practices2 = () => {
  const getTototalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractices2 = () => {
    console.log(getTototalFee(1000));
  };
  return (
    <div>
      <p>練習問題2：返却値の型指定</p>
      <button onClick={onClickPractices2}>練習問題2実行</button>
    </div>
  );
};
