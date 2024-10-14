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
    <div className="bg-violet p-4 rounded-[26px] shadow-md w-[271px] mb-4">
      <h2 className="text-lg font-amedium text-white">{accountName}</h2>
      <h2 className="text-lg font-thin text-white">{accountId}</h2>
      <div className="flex items-center">
        <div className="text-white font-medium text-[20px] mr-2">
          $ {getFormattedCurrencyAmount(balance, currency)}
        </div>
        <div className="text-white font-medium text-[14px]">{currency}</div>
      </div>
    </div>
  );
}

export default Card;
