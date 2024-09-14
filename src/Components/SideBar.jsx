import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const menu = [
    { name: "Add The Card", path: "/" },
    { name: "Transaction", path: "/transaction" },
    { name: "History", path: "/history" },
    { name: "Account", path: "/account" },
    { name: "Account Security", path: "/account-security" },
    { name: "Setting", path: "/setting" },
  ];

  return (
    <div className="bg-[#00000049] w-80 rounded-r-3xl shadow-2xl my-12 h-[620px] flex items-center justify-center">
      <div className="flex flex-col my- justify-center mx-6 text-black w-4/5">
        <ul className="flex flex-col gap-4">
          {menu.map((item, index) => (
            <li key={index} className="  rounded-md justify-center flex">
              <Link
                to={item.path}
                className="w-full bg-card-gradient hover:bg-white h-full p-4 flex items-center justify-center text-center rounded-md "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
