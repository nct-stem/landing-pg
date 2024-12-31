import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Space,
  Image,
  Divider,
} from "antd";
import {
  RocketOutlined,
  EnvironmentOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const PlanetInfoPage = () => {
  return (
    <Layout className="min-h-screen bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364]">
      <Header className="bg-transparent">
        <div className="container mx-auto">
          <Title level={2} className="text-white m-0 py-4">
            Sao Hỏa - Hành Tinh Đỏ
          </Title>
        </div>
      </Header>

      <Content className="container mx-auto py-12 px-4">
        <Row gutter={[32, 32]} className="items-center">
          <Col xs={24} lg={12}>
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.nasa.gov/images/mars.jpg"
                  alt="Sao Hỏa"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" className="w-full">
              <Card className="bg-white/10 backdrop-blur-md border-0">
                <Space direction="vertical" size="middle">
                  <Title level={3} className="text-white m-0">
                    Thông tin cơ bản
                  </Title>
                  <Paragraph className="text-gray-200 mb-0">
                    Sao Hỏa là hành tinh thứ tư tính từ Mặt Trời trong Hệ Mặt
                    Trời. Được đặt theo tên của vị thần chiến tranh La Mã, nó
                    thường được gọi là Hành tinh Đỏ do màu đỏ đặc trưng trên bề
                    mặt.
                  </Paragraph>
                </Space>
              </Card>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card className="bg-white/10 backdrop-blur-md border-0 text-center">
                    <RocketOutlined className="text-3xl text-blue-400" />
                    <Text className="block text-white mt-2">
                      Đường kính: 6,779 km
                    </Text>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card className="bg-white/10 backdrop-blur-md border-0 text-center">
                    <EnvironmentOutlined className="text-3xl text-red-400" />
                    <Text className="block text-white mt-2">
                      2 vệ tinh tự nhiên
                    </Text>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card className="bg-white/10 backdrop-blur-md border-0 text-center">
                    <HeatMapOutlined className="text-3xl text-yellow-400" />
                    <Text className="block text-white mt-2">
                      -63°C nhiệt độ TB
                    </Text>
                  </Card>
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>

        <Divider className="border-gray-600 my-12" />

        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <Title level={3} className="text-white text-center">
              Đặc điểm nổi bật
            </Title>
          </Col>
          <Col xs={24} md={8}>
            <Card className="bg-white/10 backdrop-blur-md border-0 h-full">
              <Title level={4} className="text-white">
                Địa hình
              </Title>
              <Paragraph className="text-gray-200">
                Sở hữu núi lửa cao nhất trong Hệ Mặt Trời - Olympus Mons và hẻm
                núi sâu nhất - Valles Marineris.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="bg-white/10 backdrop-blur-md border-0 h-full">
              <Title level={4} className="text-white">
                Khí quyển
              </Title>
              <Paragraph className="text-gray-200">
                Chủ yếu là khí CO2, áp suất khí quyển chỉ bằng 1% của Trái Đất.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="bg-white/10 backdrop-blur-md border-0 h-full">
              <Title level={4} className="text-white">
                Nước
              </Title>
              <Paragraph className="text-gray-200">
                Có bằng chứng về sự tồn tại của nước lỏng trong quá khứ và băng
                ở các cực.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PlanetInfoPage;
