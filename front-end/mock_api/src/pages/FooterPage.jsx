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
import { Link } from "react-router-dom";
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
              <List.Item>
                <Link to="/vechungtoi">Về Dottie</Link>
              </List.Item>
              <List.Item>
                <Link to="/nhuongquyen">Nhượng quyền</Link>
              </List.Item>
              <List.Item>
                <Link to="/tuyendung">Tuyển dụng</Link>
              </List.Item>
              <List.Item>
                <Link to="/huongdanmuahang">Hướng dẫn mua hàng</Link>
              </List.Item>
            </List>
          </Col>
          <Col span={8}>
            <List>
              <List.Item>
                <Link to="/chinhsachthanhvien">Chính sách thành viên</Link>
              </List.Item>
              <List.Item>
                <Link to="/chinhsachbaomat">Chính sách bảo mật</Link>
              </List.Item>
              <List.Item>
                <Link to="/chinhsachthanhtoan">Chính sách thanh toán</Link>
              </List.Item>
              <List.Item>
                <Link to="/chinhsachdoivabaohanhsanpham">
                  Chính sách đổi và bảo hành sản phẩm
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/chinhsachbaovethongtinnguoidung">
                  Chính sách bảo vệ thông tin người dùng và người tiêu dùng
                </Link>
              </List.Item>
            </List>
          </Col>
          <Col span={8}>
            <List>
              <List.Item>
                <InstagramOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
                <TikTokOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
                <YoutubeOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
                <FacebookOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
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
                    margin: "0 auto", // Căn giữa ảnh
                    marginTop: "16px", // Khoảng cách từ trên xuống
                    width: "100px", // Đặt chiều rộng của ảnh
                    height: "auto" // Tự động điều chỉnh chiều cao theo tỷ lệ
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
