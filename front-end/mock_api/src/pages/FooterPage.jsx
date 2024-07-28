import React from "react";
import { Row, Col, Typography, List, Image } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import boCongThuong from "../assets/support/img/index/boCongThuong.png";

const { Title } = Typography;

const FooterPage = () => {
  return (
    <div className="foot">
      <div className="foot-detail">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="cach">
              <Title level={4}>DOTTIE</Title>
            </div>
            <List>
              <List.Item>Về Dottie</List.Item>
              <List.Item>Nhượng quyền</List.Item>
              <List.Item>Tuyển dụng</List.Item>
              <List.Item>Hướng dẫn mua hàng</List.Item>
            </List>
          </Col>
          <Col span={8}>
            <List>
              <List.Item>Chính sách thành viên</List.Item>
              <List.Item>Chính sách bảo mật</List.Item>
              <List.Item>Chính sách thanh toán</List.Item>
              <List.Item>Chính sách đổi và bảo hành sản phẩm</List.Item>
              <List.Item>Chính sách bảo vệ thông tin người dùng và người tiêu dùng</List.Item>
            </List>
          </Col>
          <Col span={8}>
            <List>
              <List.Item>
              <InstagramOutlined
                style={{ fontSize: "24px", marginRight: "0px" }}
              />
              <TikTokOutlined
                style={{ fontSize: "24px", marginRight: "0px" }}
              />
              <YoutubeOutlined
                style={{ fontSize: "24px", marginRight: "0px" }}
              />
              <FacebookOutlined
                style={{ fontSize: "24px", marginRight: "0px" }}
              />
              </List.Item>
              <List.Item>
              <PhoneOutlined style={{ marginRight: "8px" }} />
                0931413481
              </List.Item>
              <List.Item>
              <MailOutlined style={{ marginRight: "8px" }} />
                nhom1@gmail.com
              </List.Item>
              <List.Item>
              <Image
                style={{
                  display: "block",
                  margin: " 0 auto" /* Căn giữa ảnh */,
                  marginTop: "16px" /* Khoảng cách từ trên xuống */,
                  width: "100px" /* Đặt chiều rộng của ảnh */,
                  height: "auto" /* Tự động điều chỉnh chiều cao theo tỷ lệ */,
                }}
                src={boCongThuong}
                alt=""
              />
              </List.Item>
            </List>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterPage;
