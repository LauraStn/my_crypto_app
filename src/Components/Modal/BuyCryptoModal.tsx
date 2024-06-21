import { buyCrypto } from "@/Service/crypto";
import { CryptoProps } from "@/Utils/types";
import { Box, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsCart4 } from "react-icons/bs";

export const BuyCryptoModal = ({ crypto }: { crypto: CryptoProps }) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState(1);

  function HandleCryptoBuy() {
    buyCrypto(crypto.id, amount)
      .then((res) => {
        if (res.status !== undefined) {
          handleClose();
          toast.success("Successfully buyed");
          return;
        }
        toast.error(res.response.data.message);
      })
      .catch((e) => toast.error(e));
  }

  return (
    <div>
      <Tooltip title="Buy">
        <button
          onClick={handleOpen}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <BsCart4 />
        </button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            className="text-black indent-3 border-2 border-black  w-full"
            placeholder="how many tokens?"
            required
            defaultValue={1}
          />

          <div className="flex items-center">
            <button
              onClick={handleClose}
              className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
            >
              Cancel
            </button>
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={() => {
                HandleCryptoBuy();
              }}
            >
              Buy
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
