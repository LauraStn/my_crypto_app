import { createCrypto } from "@/Service/crypto";
import { CryptoProps, PromoCodeProps } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import { register } from "module";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../Error/Error";
import { MdAdd } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { createPromoCode } from "@/Service/promoCode";

export const CreateCodeModal = () => {
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
  } = useForm<CryptoProps>();

  const onSubmit: SubmitHandler<PromoCodeProps> = (data) =>
    createPromoCode(data.name, data.value)
      .then((res) => {
        if (res.status !== undefined) {
          toast.success("Promo Code Created !");
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
      <button
        onClick={handleOpen}
        className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
      >
        Add <MdAdd />
      </button>
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
              <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black 0 mb-8">
                Create a Promo Code
              </h1>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("name", { required: true })}
                />
                {errors.name && <ErrorMsg error={"Name"} />}
              </div>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="value"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Value:
                </label>
                <input
                  type="number"
                  id="value"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("value", {
                    valueAsNumber: true,
                    required: true,
                  })}
                />{" "}
                {errors.value && <ErrorMsg error={"Value"} />}
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
