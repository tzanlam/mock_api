import React, { useState } from "react";
import { Modal, Card, Button } from "antd";
import "../assets/support/style/ModalHome.css";

const ModalHome = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Đăng nhập để nhận phiếu giảm giá"
      open={isModalVisible}
      footer={null}
      onCancel={handleOk}
    >
      <Card title="GIẢM 50,000₫">
        <p>Cho đơn hàng từ 200,000₫</p>
        <p>Cho tất cả sản phẩm</p>
      </Card>
      <Card title="GIẢM 5%">
        <p>Cho đơn hàng từ 600,000₫</p>
        <p>Cho tất cả sản phẩm</p>
      </Card>
      <Card title="GIẢM 10%">
        <p>Cho đơn hàng từ 1,000,000₫</p>
        <p>Cho tất cả sản phẩm</p>
      </Card>
      <Button type="primary" block>
        Thu thập tất cả
      </Button>
    </Modal>
  );
};

export default ModalHome;
