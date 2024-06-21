import { updateOffer } from "@/Service/offer";
import { getMyAssets } from "@/Service/user";
import { OffersProps } from "@/Utils/types";
import { Box, Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const EditOfferModal = ({
  offer,
  amount,
}: {
  offer: OffersProps;
  amount: number;
}) => {
  useEffect(() => {
    getMyAssets().then((res) => {});
  }, []);
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
  } = useForm<OffersProps>();

  const onSubmit: SubmitHandler<OffersProps> = (data) =>
    updateOffer(offer.id, offer.Crypto.id, data.amount)
      .then((res) => {
        if (res.status !== undefined) {
          toast.success("Crypto Updated !");
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
      <Tooltip title="Edit this offer">
        <button
          onClick={handleOpen}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="flex justify-center">Update this offer</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
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
                // max={offer.amount}
                className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                {...register("amount", {
                  valueAsNumber: true,
                  required: true,
                })}
              />{" "}
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
                value="Update"
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
