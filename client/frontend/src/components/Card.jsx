import React from 'react'

function Card({account}) {
  return (
    <div className="bg-brown p-4 rounded-[26px] shadow-md w-[271px] mb-4">
      <h2 className="text-lg font-amedium text-white">{account.accountName}</h2>
      <h2 className="text-lg font-thin text-white">{account.accountId}</h2>
      <div className="grid grid-cols-2 min-w-full mt-10">
        <div className="text-white font-amedium">${account.balance}</div>
        <div className="text-white font-amedium">{account.currency}</div>
      </div>
    </div>
  );
}

export default Card