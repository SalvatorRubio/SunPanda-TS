import React from "react";
import Modal from "react-bootstrap/Modal";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAddProduct: React.FC<Props> = ({ show, setShow }) => {
  return (
    <Modal
      size="sm"
      show={show}
      dialogClassName="mt-2"
      contentClassName="text-white text-center border-0 m-auto "
      style={{ height: 105, pointerEvents: "none" }}
      backdrop={false}
      onHide={() => setShow(false)}
    >
      <Modal.Body
        style={{ background: "#ff9800", fontSize: 13, width: 205 }}
        className="rounded-2 border-0"
      >
        Товар добавлен в корзину!
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddProduct;
