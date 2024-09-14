import React, { useContext, useState } from "react";
import { Cardcontext } from "../App";

const Transaction = () => {
  const { Data, setData , history, setHistory } = useContext(Cardcontext);

  const [selectCard, setSelectCard] = useState(null);
  const [newCvc, setNewCvc] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectCard || !newCvc || !amount) {
      alert("Please fill all fields");
      return;
    }

    if (newCvc !== selectCard.cvc) {
      alert("Invalid CVV2");
      return;
    }

    const updatedData = Data.map((card) =>
      card.cardNumber === selectCard.cardNumber
        ? { ...card, balance: card.balance - Number(amount) }
        : card
    );

    setData(updatedData);
    alert("Transaction done");
    const newTransaction = {
      cardNumber: selectCard.cardNumber,
      amount: Number(amount),
      date: new Date().toLocaleString(),
    };
    setHistory([...history,newTransaction])
    setSelectCard(null);
    setNewCvc("");
    setAmount("");
  };

  return (
    <div className="ml-12 gap-2 flex flex-col  items-center">
      <h2 className="font-bold text-2xl mt-10 mb-8">Transaction</h2>
      <form className="w-[400px]" onSubmit={handleSubmit}>
        <div className=" flex bg-card-gradient rounded-md p-2 items-center justify-center">
          <div className="ml-2 flex items-center">
            <h3 className="font-bold text-xl">Card Number :</h3>
          </div>
          <div className="text-black">
            <select
              name=""
              id=""
              value={selectCard ? selectCard.cardNumber : ""}
              onChange={(e)=>setSelectCard(Data.find((card)=>card.cardNumber===e.target.value))}
            >
              <option value="">select a Card</option>
              {Data.map((card,index)=>(
                <option key={index} value={card.cardNumber}>
                  {card.name}-{card.cardNumber}
                </option>
              ))}
            </select>
            {/* <select
              value={selectCard ? selectCard.cardNumber : ""}
              onChange={(e) =>
                setSelectCard(Data.find((card) => card.cardNumber === e.target.value))
              }
            >
              <option value="" className="bg-none">Select a card</option>
              {Data.map((card, index) => (
                <option key={index} value={card.cardNumber} className="rounded-md">
                  {card.name} - {card.cardNumber}
                </option>
              ))}
            </select> */}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <h3>Enter the Cvv2 :</h3>
          <input
            type="number"
            className="w-full p-2 rounded-md text-black flex text-center"
            value={newCvc}
            onChange={(e) => setNewCvc(e.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <label>Enter the amount</label>
          <input
            type="number"
            className="w-full p-2 rounded-md text-black flex text-center"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-white py-2 w-1/3 rounded-md text-black mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
