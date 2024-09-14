import React, { useContext } from "react";
import { Cardcontext } from "../App";

const AddCard = () => {
  const {
    name,
    setName,
    cvc,
    setCvc,
    cardNumber,
    setCardNumber,
    month,
    setMonth,
    year,
    setYear,
    balance,
    setBalance,
    Data,
    setData,
  } = useContext(Cardcontext);
  console.log(balance);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      cardNumber,
      name,
      month,
      year,
      cvc,
      balance,
    };

    setData([...Data, newCard]);
    setName("");
    setBalance("");
    setCardNumber("");
    setCvc("");
    setMonth("");
    setYear("");
  };
  return (
    <div className="ml-12 gap-2 flex flex-col ">
      <h1 className="font-bold text-2xl mt-10 mb-8">PointCard</h1>
      <h2 className="text-lg font-medium">Information</h2>
      <form className="w-[400px] " action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="">FirstName & LastName:</label>
          <input
            className="w-full p-2 rounded-md text-black flex text-center focus:outline-none focus:ring-2 "
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="">the 16-digit card number </label>
          <input
            className="w-full p-2 rounded-md text-black flex text-center focus:outline-none focus:ring-2 "
            placeholder="Enter your Card Number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-6 ">
          <label htmlFor="">CVC Number:</label>
          <input
            className="py-2 rounded-md text-black flex text-center focus:outline-none focus:ring-2 "
            placeholder="Enter The CVV2"
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <div className=" flex-col flex w-[192px]  gap-2 ">
            <label className="" htmlFor="">
              Expiray month:
            </label>
            <input
              className="py-2 rounded-md text-black flex text-center focus:outline-none focus:ring-2 "
              placeholder="12"
              type="text"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[192px] gap-2">
            <label htmlFor="">Expiry year:</label>
            <input
              className="py-2 rounded-md mb-6 text-black flex text-center focus:outline-none focus:ring-2 "
              placeholder="03"
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2 mb-6">
          <label htmlFor="">Balance:</label>
          <input
            type="number"
            className="py-2 rounded-md text-center text-black focus:outline-none focus:ring-2"
            placeholder="Enter Your Balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-white py-2 w-1/3 rounded-md text-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
