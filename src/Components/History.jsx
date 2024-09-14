import React, { useContext } from 'react'
import { Cardcontext } from '../App'
const History = () => {
    const {history} = useContext(Cardcontext)
    return (
        <div className="ml-12 gap-2 flex flex-col items-center">
          <h2 className="font-bold text-2xl mt-10 mb-8">Transaction History</h2>
          <div className="w-[400px] bg-custom-gradient p-4 rounded-md shadow-lg">
            {history.length > 0 ? 
              <ul>
                {history.map((transaction, index) => (
                  <li key={index} className="border-b py-2">
                    <div>Card: {transaction.cardNumber}</div>
                    <div>Amount: {transaction.amount}</div>
                    <div>Date: {transaction.date}</div>
                  </li>
                ))}
              </ul>
             : 
              <p>No transactions yet.</p>
            }
          </div>
        </div>
      );
    };

export default History
