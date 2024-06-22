import { CryptoProps, OffersProps } from "@/Utils/types";
import React from "react";
import { BuyOfferModal } from "../Modal/BuyOfferMofal";
import { DeleteOfferModal } from "../Modal/DeleteOfferModal";
import { BuyCryptoModal } from "../Modal/BuyCryptoModal";
import { USDollar } from "@/Utils/currencyFormat";
import Image from "next/image";

const CryptoRow = ({ crypto }: { crypto: CryptoProps }) => {
  console.log(crypto.image);

  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              className="w-6 h-6 rounded-full"
              src={crypto.image}
              alt={""}
              width={24}
              height={24}
            />
          </div>
          <span className="font-medium"> {crypto.name} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">
            {" "}
            {USDollar.format(Math.round(crypto.value * 100) / 100)}
          </span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span> {crypto.quantity} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <BuyCryptoModal crypto={crypto} />
        </div>
      </td>
    </tr>
  );
};

export default CryptoRow;
