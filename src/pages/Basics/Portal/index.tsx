import { useState } from "react";
import Modal from "./Modal";
import { Button } from "antd";

function PortalDemo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* you can also put this in your static html file */}
      <div id="modal-root"></div>
      {showModal && (
        <Modal>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "200px",
              width: "200px",
              background: "rgba(0,0,0,0.1)",
              zIndex: 99,
            }}
          >
            I'm a modal!{" "}
            <Button
              style={{ background: "papyawhip" }}
              onClick={() => setShowModal(false)}
            >
              close
            </Button>
          </div>
        </Modal>
      )}
      <Button onClick={() => setShowModal(true)}>show Modal</Button>
    </div>
  );
}

export default PortalDemo;
