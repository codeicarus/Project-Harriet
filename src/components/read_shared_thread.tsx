import Modal from "../utils/modal";
import React, { useState } from "react";
import ReadThread from "./read_thread";
import { useNavigate, useParams } from "react-router-dom";

function ReadSharedThread() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  const topicIdVar = useParams().topicId || "";

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/Explore");
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="bg-gray-800 p-4 rounded-lg">
        <ReadThread topicId={topicIdVar} />
      </div>
    </Modal>
  );
}

export default ReadSharedThread;
