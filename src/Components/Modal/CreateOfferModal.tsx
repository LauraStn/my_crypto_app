import { createCrypto } from "@/Service/crypto";
import { CryptoProps, UserHasCrypto } from "@/Utils/types";
import { Box, Modal, Tooltip } from "@mui/material";
import { register } from "module";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../Error/Error";
import { MdAdd, MdOutlineLibraryAdd } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { createOffer } from "@/Service/offer";

export const CreateOfferModal = ({
  userHasCrypto,
}: {
  userHasCrypto: UserHasCrypto;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserHasCrypto>();

  const onSubmit: SubmitHandler<UserHasCrypto> = (data) =>
    createOffer(userHasCrypto.Crypto.id, data.amount)
      .then((res) => {
        if (res.status !== undefined) {
          toast.success("Offer Created !");
          handleClose();
          return;
        } else {
          toast.error(res.response.data.message);
          handleClose();
        }
      })
      .catch((e) => toast.error(e));

  return (
    <div>
      <Tooltip title="Create an offer">
        <button
          onClick={handleOpen}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <FaBitcoin />
        </button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4"
            >
              {" "}
              <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black">
                Create an offer
              </h1>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="amount"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  max={userHasCrypto.amount}
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("amount", {
                    valueAsNumber: true,
                    required: true,
                  })}
                />{" "}
                {errors.amount && <ErrorMsg error={"amount"} />}
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleClose}
                  className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  className="bg-green-700 cursor-pointer text-white rounded-md text-center w-32 p-2 m-4 "
                  value="Create"
                />
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
