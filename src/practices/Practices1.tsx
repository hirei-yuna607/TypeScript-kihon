export const Practices1 = () => {
  const calcTototalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractices1 = () => {
    calcTototalFee(1000);
  };
  return (
    <div>
      <p>練習問題１：引数の型指定</p>
      <button onClick={onClickPractices1}>練習問題１実行</button>
    </div>
  );
};
