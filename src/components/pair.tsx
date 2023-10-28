import React, { FC, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import Modal, { modalProps } from "./modal";
import { useHashConnectContext } from "../hashconnect/hashconnect";

const Pair: FC<modalProps> = ({ setModal }) => {
  const { state, pairingString, connectToExtension } = useHashConnectContext();
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    setModal(state !== "Paired");
  }, [setModal, state]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pairingString);
      setCopySuccess("Copied :)");
      setTimeout(() => {
        setCopySuccess(""); // Clear the message after 2 seconds
      }, 1000);
    } catch (err) {
      setCopySuccess("Failed to copy.");
    }
  };

  return (
    <Modal
      width="xl max-w-4xl"
      setShow={setModal}
      className="bg-gradient-to-r from-green-400 to-blue-500 bg-opacity-75 text-gray-100 rounded-xl shadow-2xl border-opacity-50 border-green-500 border-2 font-extralight overflow-hidden"
    >
      <article className="m-8 space-y-8">
        <h1 className="text-3xl font-semibold border-b border-gray-100 py-2">
          Connect a Wallet
        </h1>
        <div className="p-8 bg-blue-100 bg-opacity-30 rounded-lg shadow-xl border border-blue-500 border-opacity-30">
          <h2 className="text-2xl font-semibold mb-4">Hashpack</h2>
          <button
            onClick={(event) => connectToExtension(event)}
            className="transition-all duration-500 ease-in-out bg-blue-600 rounded-full hover:bg-blue-800 transform text-white font-bold py-3 px-6 focus:outline-none border-2 border-blue-700 hover:border-blue-800"
          >
            Connect Wallet
          </button>
        </div>
        <div className="p-8 bg-blue-100 bg-opacity-30 rounded-lg shadow-xl border border-blue-500 border-opacity-30">
          <h2 className="text-2xl font-semibold mb-4">Hashpack with code</h2>
          <div className="flex justify-between items-center">
            <input
              type="text"
              className="w-full px-3 py-2 mr-4 text-base rounded-full text-gray-900 border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              value={pairingString}
              readOnly
            />
            <button
              className="transition-all duration-500 ease-in-out bg-blue-600 rounded-full hover:bg-blue-800 text-white font-bold py-3 px-6 focus:outline-none border-2 border-blue-700 hover:border-blue-800"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <span className="text-green-700">{copySuccess}</span>
        </div>
        <div className="p-8 bg-blue-100 bg-opacity-30 rounded-lg shadow-xl border border-blue-500 border-opacity-30">
          <h2 className="text-2xl font-semibold mb-4">Hashpack with QR Code</h2>
          <div className="flex justify-center">
            {pairingString ? (
              <QRCode
                value={pairingString}
                size={200}
                level={"M"}
                className="shadow-2xl"
              />
            ) : (
              <div className="flex items-center justify-center w-64 h-64 border border-gray-500 rounded-full">
                <span className="text-gray-500">No QR code</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Modal>
  );
};

export default Pair;
