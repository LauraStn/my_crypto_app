import { USDollar } from "@/Utils/currencyFormat";
import { UserHasCrypto } from "@/Utils/types";
import React from "react";

export type UserAssetsProps = {
  UserHasCrypto?: UserHasCrypto;
  dollarAvailables: number;
  pseudo: string;
  firstName: string;
  lastName: string;
};
const UserRow = (user: UserAssetsProps) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user.pseudo}
          </p>
          <p className="text-sm text-gray-500 truncate">
            [{user.firstName} {user.lastName}]
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          {USDollar.format(Math.round(user.dollarAvailables * 100) / 100)}
        </div>
      </div>
    </li>
  );
};

export default UserRow;
