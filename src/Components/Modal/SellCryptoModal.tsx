import { sellCrypto } from "@/Service/crypto";
import { CryptoProps, UserHasCrypto } from "@/Utils/types";
import { Box, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaDonate } from "react-icons/fa";

export const SellCryptoModal = ({
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
  const [amount, setAmount] = useState(1);

  function HandleCryptoBuy() {
    sellCrypto(userHasCrypto.Crypto.id, amount)
      .then((res) => {
        if (res.status !== undefined) {
          handleClose();
          toast.success("Successfully selled");
          return;
        }
        toast.error(res.response.data.message);
      })
      .catch((e) => toast.error(e));
  }

  return (
    <div>
      <Tooltip title="Sell to server">
        <button
          onClick={handleOpen}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <FaDonate />
        </button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center justify-center gap-4">
            <p>Confirm selling to server?</p>

            <input
              type="number"
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
              className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                Sell
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
