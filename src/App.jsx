import { GlobalProvider } from "./context/GlobalState";
import {Hearder} from "./components/Header";
import {Balance} from "./components/balance";
import {Tranform} from "./components/transactions/tranform";
import {TransactionList} from "./components/transactions/Transactionlist";
import {IncomeExpenses} from "./components/IncomeExpenses";
import { ExpenseChart } from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-black h-screen flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center">
          <div className="bg-neutral-800 p-10 rounded-md w-full">
            <Hearder />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <Tranform />
              </div>
              <div className="flex-1 flex flex-col">
                <TransactionList />
                <ExpenseChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
