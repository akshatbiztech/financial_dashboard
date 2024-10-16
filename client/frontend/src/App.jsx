/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Card from "./components/Card";
import CustomButton from "./components/CustomButton";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const constants = {
  texts: {
    WELCOME_MSG: "Welcome To Your Financial Dashboard",
    WELCOME_MSG_DESCRIPTION:
      "This dashboard gives you a clear picture of your account balances and transactions.",
    REFRESH_BUTTON_MSG: "Click Refresh to get the updated account.",
    MORNING: "Good Morning",
    AFTERNOON: "Good Afternoon",
    EVENING: "Good Evening",
  },
  urls: {
    dashboard: {
      GET_ACCOUNT_BALANCE:
        "https://financial-dashboard-5g11.onrender.com/balances",
    },
  },
};

function App() {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");
  const [greeting, setGreeting] = useState(""); // State to hold the time-based greeting

  const {
    WELCOME_MSG,
    MORNING,
    AFTERNOON,
    EVENING,
    WELCOME_MSG_DESCRIPTION,
    REFRESH_BUTTON_MSG,
  } = constants.texts;

  const { GET_ACCOUNT_BALANCE } = constants.urls.dashboard;

  const fetchAccounts = async () => {
    try {
      const response = await fetch(GET_ACCOUNT_BALANCE);
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
    fetchAccounts();
  };

  // Function to generate greeting based on the time of day
  const generateGreeting = () => {
    const currentHour = new Date().getHours(); // Get the current hour in local time zone
    if (currentHour >= 5 && currentHour < 12) {
      return MORNING; // Morning
    } else if (currentHour >= 12 && currentHour < 18) {
      return AFTERNOON; // Afternoon
    } else {
      return EVENING; // Evening
    }
  };

  // Use effect to fetch accounts and set the greeting when the component mounts
  useEffect(() => {
    fetchAccounts();
    const greetingMessage = generateGreeting(); // Generate time-based greeting
    setGreeting(greetingMessage); // Set greeting
  }, []);

  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      {/* Top Half - Green Background */}
      <div className="bg-green text-white p-8 flex flex-col justify-center items-left w-full h-1/2 ">
        <h1 className="text-[48px] font-tbold text-left mb-4 ml-[120px]">
          👋🏻 {greeting}, <br /> {WELCOME_MSG}
        </h1>
        <p className="text-[20px] font-amedium text-left  ml-[120px]">
          {WELCOME_MSG_DESCRIPTION}
        </p>
      </div>

      {/* Bottom Half */}
      <div className="bg-greenlight p-8 shadow-md w-full h-1/2 flex flex-col">
        {/* Grid Container */}
        {/*Total Balance */}
        <div className="bg-[#DFF5D7] p-4 shadow-lg rounded-[20px] w-[400px] mb-4  ml-[120px] text-center">
          <h2 className="text-lg font-medium">Total Balance</h2>
          <p className="text-black font-bold text-[24px] mr-2">
            $
            {accounts
              .reduce((acc, account) => acc + account.balance, 0)
              .toFixed(2)}{" "}
            <span className="text-black font-bold text-[14px]">CAD</span>
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-4  ml-[120px] min-w-full">
          {/* Refresh Button  */}
          <div className="flex flex-col justify-between ">
            <div></div> {/* Empty space to push content down */}
            <div>
              <CustomButton
                title="Refresh"
                onClick={refreshAccounts}
              ></CustomButton>{" "}
              {"     \t"}
              <span className="text-sm mt-2 text-left">
                {REFRESH_BUTTON_MSG}
              </span>
            </div>
          </div>
        </div>

        {/* Accounts */}
        <div className="w-full mt-10 grid grid-cols-3 gap-4  min-w-full  ml-[120px]">
          {/* Display Accounts */}
          {accounts.map((account) => (
            <Card key={account.id} account={account} />
          ))}
        </div>

        {/* Display Error Message if No Accounts Found */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default App;
