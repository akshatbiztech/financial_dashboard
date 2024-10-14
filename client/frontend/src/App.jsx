/* eslint-disable react-hooks/rules-of-hooks */
import Card from "./components/Card";
import CustomButton from "./components/CustomButton";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks


function App() {

  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");

  const fetchAccounts = async () => {
    try {
      const response = await fetch(
        "https://financial-dashboard-5g11.onrender.com/balances"
      ); 
      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }
      const data = await response.json();
      setAccounts(data.accounts); 
      setError("");
    } catch (err) {
      setError("No accounts found."); 
      setAccounts([]); 
    }
  };

  const refreshAccounts = () => {
    const updatedAccounts = accounts.map((account) => ({
      ...account,
      balance: account.balance + 100, 
    }));

    setAccounts(updatedAccounts); 
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      {/* Top Half */}
      <div className="bg-brown text-white p-8 flex flex-col justify-center items-center w-full h-1/2">
        <h1 className="text-[48px] font-tbold text-left mb-4">
          👋 Hola, <br /> Welcome To Your Financial Dashboard
        </h1>
        <p className="text-[20px] font-amedium text-left">
          This dashboard gives you a clear picture of your account balances and
          transactions.
        </p>
      </div>

      {/* Bottom Half */}
      <div className="bg-cream p-8 shadow-md w-full h-1/2 flex flex-col justify-start items-start">
        <CustomButton title="Refresh" onClick={refreshAccounts}></CustomButton>
        <p className="text-sm mt-2 ml-2">
          Use Refresh to get the updated account.
        </p>
        {/* Display Error Message if No Accounts Found */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display Accounts */}
        <div className="w-full mt-10 grid grid-cols-3 min-w-full">
          {accounts.map((account) => (
            <Card key={account.id} account={account} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
