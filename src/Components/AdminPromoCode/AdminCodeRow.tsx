import { PromoCodeProps } from "@/Utils/types";
import React from "react";
import EditCodeModal from "../Modal/EditCodeModal";
import { DeleteCodeModal } from "../Modal/DeleteCodeModal";

const AdminCodeRow = (promoCode: PromoCodeProps) => {
  return (
    <tr className="text-gray-500">
      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
        {promoCode.name}
      </th>
      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
        {promoCode.value}
      </td>
      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
        <div className="flex">
          <EditCodeModal promoCode={promoCode} />
          <DeleteCodeModal promoCode={promoCode} />

          {/* <div className="relative w-full">
            <div className="w-full bg-gray-200 rounded-sm h-2">
              <div className="bg-orange-300 h-2 rounded-sm width=[24%]"></div>
            </div>
          </div> */}
        </div>
      </td>
    </tr>
  );
};

export default AdminCodeRow;
