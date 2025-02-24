import {
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Button,
  Typography,
  Space,
  Carousel,
} from "antd";
import {
  ExperimentOutlined,
  TeamOutlined,
  BookOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  const carouselContent = [
    {
      title: "Welcome to NCT STEM",
      description: "Exploring the Wonders of Chemistry Together",
      image: "/path-to-your-image.jpg",
    },
    // Add more carousel items as needed
  ];

  const features = [
    {
      icon: <ExperimentOutlined className="text-2xl" />,
      title: "Hands-on Experiments",
      description: "Experience chemistry through exciting lab work",
    },
    {
      icon: <TeamOutlined className="text-2xl" />,
      title: "Study Groups",
      description: "Join our collaborative learning sessions",
    },
    {
      icon: <BookOutlined className="text-2xl" />,
      title: "Mentorship",
      description: "Learn from experienced professionals",
    },
    {
      icon: <CalendarOutlined className="text-2xl" />,
      title: "Events",
      description: "Participate in competitions and workshops",
    },
  ];

  const upcomingEvents = [
    {
      title: "Chemistry Olympiad Prep",
      date: "January 15, 2025",
      description: "Intensive preparation sessions",
    },
    // Add more events as needed
  ];

  return (
    <Layout className="min-h-screen">
      <Header className="bg-white">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">NCT STEM</div>
          <Menu mode="horizontal" className="w-full justify-end">
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="events">Events</Menu.Item>
            <Menu.Item key="resources">Resources</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content>
        {/* Hero Section with Carousel */}
        <Carousel autoplay>
          {carouselContent.map((item, index) => (
            <div key={index} className="h-96 bg-blue-600 text-white">
              <div className="container mx-auto px-4 py-20">
                <Title level={1} className="text-white">
                  {item.title}
                </Title>
                <Paragraph className="text-white text-lg">
                  {item.description}
                </Paragraph>
                <Button type="primary" size="large">
                  Join Our Club
                </Button>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Title level={2} className="text-center mb-12">
              What We Offer
            </Title>
            <p>Hello World</p>
            <Row gutter={[24, 24]}>
              {features.map((feature, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card className="text-center h-full">
                    <Space direction="vertical" className="w-full">
                      {feature.icon}
                      <Title level={4}>{feature.title}</Title>
                      <Paragraph>{feature.description}</Paragraph>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Events Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <Title level={2} className="text-center mb-12">
              Upcoming Events
            </Title>
            <Row gutter={[24, 24]}>
              {upcomingEvents.map((event, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card
                    title={event.title}
                    extra={<span className="text-blue-600">{event.date}</span>}
                  >
                    <Paragraph>{event.description}</Paragraph>
                    <Button type="link">Learn More</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Content>

      <Footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white">
                Contact Us
              </Title>
              <Paragraph className="text-gray-300">
                Email: contact@nctstem.org
                <br />
                Phone: (555) 123-4567
              </Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white">
                Location
              </Title>
              <Paragraph className="text-gray-300">
                Science Building, Room 301
                <br />
                123 Education Street
              </Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white">
                Follow Us
              </Title>
              <Space>
                <Button type="link" className="text-white">
                  Twitter
                </Button>
                <Button type="link" className="text-white">
                  Instagram
                </Button>
                <Button type="link" className="text-white">
                  LinkedIn
                </Button>
              </Space>
            </Col>
          </Row>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <Paragraph className="text-gray-300">
              © 2024 NCT STEM Chemistry Club. All rights reserved.
            </Paragraph>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default HomePage;
