import React, { Fragment, useEffect, useState } from "react";
import { CryptoProps, OffersProps } from "../../Utils/types";
import { getAllOffers } from "@/Service/offer";
import { getAllCryptos } from "@/Service/crypto";
import CryptoRow from "./CryptoRow";
import Link from "next/link";

export const CryptoTable = () => {
  const [cryptosList, setCryptosList] = useState<CryptoProps[]>();

  useEffect(() => {
    getAllCryptos().then((res) => {
      setCryptosList(res.data);
    });
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">All Cryptos</h3>
          <span className="text-base font-normal text-gray-500">
            This is a list of all crypto on server
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="bg-white shadow-md rounded">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Crypto</th>
                <th className="py-3 px-6 text-left">Value</th>
                <th className="py-3 px-6 text-left">Server Quantity</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {cryptosList &&
                cryptosList?.map((crypto) => {
                  return (
                    <Fragment key={crypto.id}>
                      <CryptoRow crypto={crypto} />
                    </Fragment>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
