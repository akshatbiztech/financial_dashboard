import React from "react";

function Card({ account }) {
  const { accountName, accountId, balance, currency } = account;

  // format the currency amount
  const getFormattedCurrencyAmount = (amount, currency) => {
    const currencyOptions = {
      style: "currency",
      currency: currency,
    };

    const formattedCurrencyAmount = amount.toLocaleString(
      "en-US",
      currencyOptions
    );

    return formattedCurrencyAmount.split("$")[1];
  };

  return (
    <div className="bg-[#DFF5D7] p-4 rounded-[20px] shadow-2xl w-[300px] mb-4 text-center">
      <h2 className="text-lg font-medium text-black">{accountName}</h2>
      <h2 className="text-sm font-light text-gray-500">{accountId}</h2>
      <div className="flex items-center justify-center mt-2">
        <div className="text-black font-bold text-[24px] mr-2">
          $ {getFormattedCurrencyAmount(balance, currency)}
        </div>
        <div className="text-black font-bold text-[14px]">{currency}</div>
      </div>
    </div>
  );
}

export default Card;