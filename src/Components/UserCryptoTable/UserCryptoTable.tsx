import React, { Fragment, useEffect, useState } from "react";
import { UserHasCrypto } from "../../Utils/types";
import { getAllCryptos } from "@/Service/crypto";
import { getMyAssets } from "@/Service/user";
import UserCryptoRow from "./UserCryptoRow";

export const UserCryptoTable = () => {
  const [myAssets, setMyAssets] = useState<UserHasCrypto[]>();

  useEffect(() => {
    getMyAssets().then((res) => {
      setMyAssets(res.data.UserHasCrypto);
    });
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">My cryptos</h3>
          <span className="text-base font-normal text-gray-500">
            This is a list of all your crypto
          </span>
        </div>
      </div>
      <div className="w-full mx-auto">
        <div className="bg-white shadow-md rounded">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Crypto</th>
                <th className="py-3 px-6 text-left">Value</th>
                <th className="py-3 px-6 text-left">Server Quantity</th>
                <th className="py-3 px-6 text-center">Amount</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {myAssets &&
                myAssets?.map((UserHasCrypto) => {
                  return (
                    <Fragment key={UserHasCrypto.id}>
                      <UserCryptoRow
                        userHasCrypto={{
                          Crypto: {
                            id: UserHasCrypto.Crypto.id,
                            name: UserHasCrypto.Crypto.name,
                            quantity: UserHasCrypto.Crypto.quantity,
                            value: UserHasCrypto.Crypto.value,
                            image: UserHasCrypto.Crypto.image,
                            updated_at: UserHasCrypto.Crypto.updated_at,
                          },
                          amount: UserHasCrypto.amount,
                          id: UserHasCrypto.id,
                        }}
                      />
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
