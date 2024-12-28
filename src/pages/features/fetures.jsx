import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Space,
} from "antd";
import {
  RocketOutlined,
  GlobalOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const FeaturesPage = () => {
  const features = [
    {
      icon: <RocketOutlined className="text-4xl text-blue-500" />,
      title: "Khám Phá Vũ Trụ",
      description: "Hành trình khám phá những bí ẩn của không gian vô tận"
    },
    {
      icon: <GlobalOutlined className="text-4xl text-green-500" />, 
      title: "Hệ Mặt Trời",
      description: "Tìm hiểu về các hành tinh và thiên thể trong hệ mặt trời"
    },
    {
      icon: <StarOutlined className="text-4xl text-yellow-500" />,
      title: "Thiên Văn Học",
      description: "Khám phá các ngôi sao, thiên hà và hiện tượng vũ trụ"
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-purple-500" />,
      title: "Công Nghệ Vũ Trụ",
      description: "Tìm hiểu về các công nghệ hiện đại trong ngành vũ trụ"
    }
  ];

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Header className="bg-[#001529]">
        <div className="container mx-auto">
          <Title level={3} className="text-white m-0 py-4">
            Khám Phá Vũ Trụ
          </Title>
        </div>
      </Header>

      <Content className="container mx-auto py-12">
        <Space direction="vertical" size="large" className="w-full">
          <div className="text-center mb-12">
            <Title level={2} className="text-blue-800">
              Các Tính Năng Nổi Bật
            </Title>
            <Paragraph className="text-gray-600 text-lg">
              Khám phá những điều kỳ diệu của vũ trụ cùng chúng tôi
            </Paragraph>
          </div>

          <Row gutter={[24, 24]} className="px-4">
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  hoverable
                  className="text-center h-full shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <Space direction="vertical" size="middle" className="w-full">
                    {feature.icon}
                    <Title level={4} className="m-0">
                      {feature.title}
                    </Title>
                    <Paragraph className="text-gray-600 mb-0">
                      {feature.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-12">
            <Title level={3} className="text-blue-800">
              Bắt Đầu Hành Trình Khám Phá
            </Title>
            <Paragraph className="text-gray-600">
              Tham gia cùng chúng tôi trong cuộc phiêu lưu khám phá vũ trụ bao la
            </Paragraph>
          </div>
        </Space>
      </Content>

      <Footer className="text-center bg-[#001529] text-white">
        Universe Explorer ©{new Date().getFullYear()} - Khám phá vũ trụ cùng chúng tôi
      </Footer>
    </Layout>
  );
};

export default FeaturesPage;
