import { getAllPromoCodes } from "@/Service/promoCode";
import { PromoCodeProps } from "@/Utils/types";
import React, { Fragment, useEffect, useState } from "react";
import AdminCodeRow from "./AdminCodeRow";
import { CreateCodeModal } from "../Modal/CreateCodeModal";

const AdminCodeTable = ({
  min,
  max,
  promoCode,
}: {
  min: number;
  max: number;
  promoCode: PromoCodeProps;
}) => {
  const [allPromoCodes, setAllPromoCodes] = useState<PromoCodeProps[]>();

  useEffect(() => {
    getAllPromoCodes().then((res) => {
      setAllPromoCodes(res.data);
    });
  }, []);
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">
          All Promo Code
        </h3>
        <CreateCodeModal promoCode={promoCode} />
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Promo Code
              </th>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Value
              </th>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {allPromoCodes &&
              allPromoCodes?.slice(min, max).map((code) => {
                return (
                  <Fragment key={code.id}>
                    <AdminCodeRow
                      id={code.id}
                      name={code.name}
                      value={code.value}
                    />
                  </Fragment>
                );
              })}
            {/* <tr className="text-gray-500">
              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                Organic Search
              </th>
              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                5,649
              </td>
              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-xs font-medium">30%</span>
                  <div className="relative w-full">
                    <div className="w-full bg-gray-200 rounded-sm h-2">
                      <div className="bg-cyan-600 h-2 rounded-sm width=[30%]"></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr> */}
            {/* <tr className="text-gray-500">
              <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                Referral
              </th>
              <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                4,025
              </td>
              <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-xs font-medium">24%</span>
                  <div className="relative w-full">
                    <div className="w-full bg-gray-200 rounded-sm h-2">
                      <div className="bg-orange-300 h-2 rounded-sm width=[24%]"></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCodeTable;
