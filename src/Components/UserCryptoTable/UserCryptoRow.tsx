import { UserHasCrypto } from "@/Utils/types";
import React from "react";
import { CreateOfferModal } from "../Modal/CreateOfferModal";
import { FaDonate } from "react-icons/fa";
import { SellCryptoModal } from "../Modal/SellCryptoModal";
import { USDollar } from "@/Utils/currencyFormat";

const UserCryptoRow = ({ userHasCrypto }: { userHasCrypto: UserHasCrypto }) => {
  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              className="w-6 h-6 rounded-full"
              src={userHasCrypto.Crypto.image}
            />
          </div>
          <span className="font-medium"> {userHasCrypto.Crypto.name} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">
            {" "}
            {USDollar.format(
              Math.round(userHasCrypto.Crypto.value * 100) / 100
            )}
          </span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span> {userHasCrypto.Crypto.quantity} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          <span> {userHasCrypto.amount} </span>
        </div>
      </td>
      {/* <td className="py-3 px-6 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
          {Math.round(offer.amount * offer.Crypto.value * 100) / 100} $
        </span>
      </td> */}
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <CreateOfferModal
            userHasCrypto={{
              Crypto: {
                id: userHasCrypto.Crypto.id,
                name: "",
                quantity: 0,
                value: 0,
                image: "",
                updated_at: userHasCrypto.Crypto.updated_at,
              },
              amount: userHasCrypto.amount,
              id: userHasCrypto.id,
            }}
          />
          <SellCryptoModal userHasCrypto={userHasCrypto} />
        </div>
      </td>
    </tr>
  );
};

export default UserCryptoRow;
