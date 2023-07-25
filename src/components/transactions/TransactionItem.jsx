import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction: { id, description, monto } }) {
  const { deleteTransaction } = useGlobalState();
  const sign = monto < 0 ? "-" : "+";
    return (
        <li
          key={id}
          className={
            `bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center` +
            ` ${monto < 0 ? "bg-red-700" : "bg-green-700"}`
          }
        >
          {description}
          <div>
            <span>
              {sign}${Math.abs(monto)}
            </span>
            <button
              onClick={() => deleteTransaction(id)}
              className="font-bold text-white rounded-lg ml-2"
            >
              <BiTrash />
            </button>
          </div>
        </li>
      );
    }

