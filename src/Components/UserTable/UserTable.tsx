"use client";
import React, { Fragment, useEffect, useState } from "react";
import UserRow, { UserAssetsProps } from "./UserRow";
import { getAllUsers } from "@/Service/user";
import Link from "next/link";

const UserTable = ({
  min,
  max,
  isVisible,
}: {
  min: number;
  max: number;
  isVisible: boolean;
}) => {
  const [allUsers, setAllUsers] = useState<UserAssetsProps[]>();

  useEffect(() => {
    getAllUsers().then((res) => {
      setAllUsers(res.data);
    });
  }, []);

  return (
    <div className="">
      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Richest Users
          </h3>
          {isVisible && (
            <Link
              href="/allUsers"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              View all
            </Link>
          )}
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {allUsers &&
              allUsers.slice(min, max).map((user, index) => {
                const key = `${user.firstName}-${user.lastName}-${index}`;
                return (
                  <Fragment key={key}>
                    <UserRow
                      dollarAvailables={user.dollarAvailables}
                      pseudo={user.pseudo}
                      firstName={user.firstName}
                      lastName={user.lastName}
                    />
                  </Fragment>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
