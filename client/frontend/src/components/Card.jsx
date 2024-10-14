import React from 'react'

function Card({account}) {
  return (
    <div className="bg-brown p-4 rounded-[26px] shadow-md w-[271px] mb-4">
      <h2 className="text-lg font-amedium text-white">{account.accountName}</h2>
      <h2 className="text-lg font-thin text-white">{account.accountId}</h2>
      <div className="flex items-center">
        <div className="text-white font-medium text-[20px] mr-2">
          ${account.balance}
        </div>
        <div className="text-white font-medium text-[14px]">
          {account.currency}
        </div>
      </div>
    </div>
  );
}

export default Card