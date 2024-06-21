import { TradeProps } from "@/Utils/types";
import React from "react";

const UserTradesRow = ({ trade }: { trade: TradeProps }) => {
  return (
    <>
      <tr>
        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
          Payment from{" "}
          <span className="font-semibold"> {trade.Receiver.pseudo} </span>
          to <span className="font-semibold"> {trade.Giver.pseudo} </span>
        </td>
        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
          {trade.Crypto.updated_at}
        </td>
        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
          {trade.Crypto.name}
        </td>
      </tr>
    </>
  );
};

export default UserTradesRow;
