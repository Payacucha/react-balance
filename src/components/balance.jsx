import { useGlobalState } from "../context/GlobalState";

export function Balance() {
  const { transactions } = useGlobalState();

  const montos = transactions.map((transaction) => transaction.monto);
  const total = montos.reduce((acc, item) => (acc += item), 0);
  return (
    <div className="flex justify-between items-center my-2">
      <h3>Tu Balance</h3>
      <h1 className="text-2x1 font-bold"> ${total} </h1>
    </div>
  );
}


