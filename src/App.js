import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddCard from "./Components/AddCard";
import Cards from "./Components/Cards";
import Transaction from "./Components/Transaction";
import SideBar from "./Components/SideBar";
import History from "./Components/History";
export const Cardcontext = createContext();
function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [balance, setBalance] = useState("");
  const [Data, setData] = useState([]);
  const [history, setHistory] = useState([])
  console.log(Data);
  return (
    <Cardcontext.Provider
      value={{
        name,
        setName,
        cardNumber,
        setCardNumber,
        cvc,
        setCvc,
        month,
        setMonth,
        year,
        setYear,
        balance,
        setBalance,
        Data,
        setData,
        history,
        setHistory
      }}
    >
      <div className="App bg-custom-gradient w-full flex gap-8 items-center ">
        <SideBar/>
        <div className="">
          <div className="bg-[#00000028] text-white w-[1024px] shadow-lg min-h-screen rounded-2xl my-5 flex justify-between">
            <Routes>
              <Route path="/" element={<AddCard />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="history" element={<History/>}/>
            </Routes>

            <Cards />
          </div>
        </div>
      </div>
    </Cardcontext.Provider>
  );
}

export default App;
