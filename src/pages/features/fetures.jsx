// UserProfile.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Card,
  Avatar,
  Typography,
  Divider,
  Row,
  Col,
  Statistic,
  Button,
  Tag,
  Space,
  Tabs,
  Image,
  Upload,
  message,
  Tooltip,
  Badge,
  Menu,
  Dropdown,
} from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  LinkOutlined,
  CalendarOutlined,
  PlusOutlined,
  MessageOutlined,
  BellOutlined,
  LikeOutlined,
  ShareAltOutlined,
  TeamOutlined,
  CheckCircleFilled,
  UserAddOutlined,
  PhoneOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
  EditOutlined,
  DeleteOutlined,
  LockOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Header, Content } = Layout;
const { TabPane } = Tabs;

const UserProfile = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("1");
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock data
  const user = {
    name: "Unichem Project",
    avatar:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/472463674_122122032758592234_8350008248199352047_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AYVZH0nXsUYQ7kNvgH7vRsg&_nc_oc=Adh5k_3QM6gTZDcClpkUwSlo_WQ5asskw8IAwu24BjNXeef62OyGSuvk_FK8eYAHkh8g5c-K2M4DJU8HQ76iAJ5A&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=A5fsLtfu9v6a59VK-g9TYiR&oh=00_AYAvvWDxZhONHLuoHGXSh7s_8wl1FjmEKaefa2VNB9ElUQ&oe=677D1E3F",
    cover:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/471951512_122122033028592234_5753009416296433233_n.png?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=_9YZ1qweFOYQ7kNvgGhhqHV&_nc_oc=AdgSakezuATzcq0IVxwLurl1j75pGd7yt1uA-_rU9_QpITjR8fn78w7EdQf8Pxlh79UbbuKrO_RExEs5ohtSk6ZH&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=AxJjSwV9mLlMp8-X7f5R0Vp&oh=00_AYBH61LI1APcV_vJJdS5vHuoEQ__ipWviQnQTHHh-yrW5Q&oe=677D1E0D",
    bio: "Full-stack Developer | Open Source Contributor",
    location: "Hà Nội, Việt Nam",
    website: "https://example.com",
    email: "nguyenvana@gmail.com",
    phone: "+84 123 456 789",
    joinDate: "Tháng 3, 2024",
    followers: 1234,
    following: 567,
    skills: ["Học Sinh", "Lập Trình Viên"],
    socialLinks: {
      github: "https://github.com/nguyenvana",
      linkedin: "https://linkedin.com/in/nguyenvana",
      facebook: "https://facebook.com/nguyenvana",
      twitter: "https://twitter.com/nguyenvana",
    },
    gallery: [
      "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/469894162_122118170696592234_8983009797699099718_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gsJ7SoAKUkgQ7kNvgH0GewX&_nc_oc=AdjZejRbeKsFR58nmn2rnVOTHwgJaZM2skgyGHKLalTkaWK_n9jFy9w6pjvKNF9vH2odN2_Y0osnezNNmBYqBsCp&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=Ac-KkYaaKo4ERjEmtPv3k08&oh=00_AYD8T-RZUfH4HveMDfCp4L6IgixdBHosF5lraBT6PN8Y-w&oe=677D3188",
      "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/472021059_122121699878592234_5509658700489789617_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sNebPHxoy04Q7kNvgEkDjim&_nc_oc=AdjxIkdsOSXjEyiFiZVTeDcZ7bgCLvSTTvwWHC5gs45OLFYFhpS0FN7gwEk9oMFxLDcFymsIakRneBQu8FFB7v6J&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A6bdfihC1q48ZdeiUd41gWk&oh=00_AYCRS7qxasyQo0LuxY4rDTX-k64DH9Jekc7rmJQvitdK5g&oe=677D5898",
      "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/471621439_122121505598592234_7721102236559258363_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3J8DDaAJlFIQ7kNvgFuWE0p&_nc_oc=Adg10DR9GHPQDMI1kj2hkfB2QzqFOiPOU0iz8Ujhp0-rzQYc53sQZM2OHA_MbBuaYmqo635te3d0037x6ZxCXQVc&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=Ar20zSt3j8meBE8kUAhSLq_&oh=00_AYAICdWwIBlcywphg1yDOU6C8rJsqkApLJLQHF31O-t5vQ&oe=677D3984",
    ],
    posts: [
      {
        title: "Làm thế nào để tối ưu React Performance",
        content: "Bài viết chia sẻ các kỹ thuật tối ưu hiệu suất React...",
        likes: 234,
        comments: 45,
        shares: 12,
        date: "2024-03-15",
        image:
          "https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153cea07e4ad.png",
      },
      {
        title: "Làm thế nào để tối ưu React Performance",
        content: "Bài viết chia sẻ các kỹ thuật tối ưu hiệu suất React...",
        likes: 234,
        comments: 45,
        shares: 12,
        date: "2024-03-15",
        image:
          "https://files.fullstack.edu.vn/f8-prod/blog_posts/8333/64f008718cdf5.png",
      },
      {
        title: "Làm thế nào để tối ưu React Performance",
        content: "Bài viết chia sẻ các kỹ thuật tối ưu hiệu suất React...",
        likes: 234,
        comments: 45,
        shares: 12,
        date: "2024-03-15",
        image:
          "https://files.fullstack.edu.vn/f8-prod/blog_posts/8333/64f0031f9f336.png",
      },
      {
        title: "Làm thế nào để tối ưu React Performance",
        content: "Bài viết chia sẻ các kỹ thuật tối ưu hiệu suất React...",
        likes: 234,
        comments: 45,
        shares: 12,
        date: "2024-03-15",
        image:
          "https://files.fullstack.edu.vn/f8-prod/blog_posts/11503/66fd03291e58f.jpg",
      },
      // ... other posts
    ],
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    message[isFollowing ? "error" : "success"](
      isFollowing ? "Đã hủy theo dõi" : "Đã theo dõi"
    );
  };

  const userMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Chỉnh sửa profile",
          icon: <EditOutlined />,
          onClick: () => navigate("/edit"),
        },
        {
          key: "2",
          label: "Cài đặt quyền riêng tư",
          icon: <LockOutlined />,
          onClick: () => navigate("/edit"),
        },
        {
          key: "3",
          label: "Quản lý người theo dõi",
          icon: <TeamOutlined />,
        },
      ]}
    />
  );

  return (
    <Layout style={{ minHeight: "100vh" }} className="bg-gray-100">
      <Header className="fixed w-full z-10 bg-white shadow-md">
        <Row justify="space-between" align="middle" className="h-full">
          <Col>
            <Title level={3} className="m-0 text-blue-600">
              DevSocial
            </Title>
          </Col>
          <Col>
            <Space size="large">
              <Badge count={5}>
                <Button icon={<BellOutlined />} shape="circle" />
              </Badge>
              <Badge count={2}>
                <Button icon={<MessageOutlined />} shape="circle" />
              </Badge>
              <Dropdown overlay={userMenu} placement="bottomRight">
                <Avatar
                  src={user.avatar}
                  icon={<UserOutlined />}
                  className="cursor-pointer"
                />
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </Header>

      <Layout className="mt-16">
        <div
          className="w-full h-44 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${user.cover})` }}
        ></div>

        <Content className="px-4 md:px-12 -mt-16 relative z-10">
          <Row gutter={24}>
            <Col xs={24} lg={8}>
              <Card className="shadow mb-2">
                <div className="text-center mb-6">
                  <Badge
                    count={
                      <Tooltip title="Đã xác thực">
                        <CheckCircleFilled className="text-green-500" />
                      </Tooltip>
                    }
                  >
                    <Avatar
                      size={160}
                      src={user.avatar}
                      className="mb-4 border-4 border-white shadow-md"
                    />
                  </Badge>
                  <Title level={2} className="m-0">
                    {user.name}
                  </Title>
                  <Paragraph className="text-gray-600">{user.bio}</Paragraph>
                  <Space>
                    <Button
                      type={isFollowing ? "default" : "primary"}
                      icon={
                        isFollowing ? (
                          <CheckCircleFilled />
                        ) : (
                          <UserAddOutlined />
                        )
                      }
                      onClick={handleFollow}
                    >
                      {isFollowing ? "Đang theo dõi" : "Theo dõi"}
                    </Button>
                    <Button icon={<MessageOutlined />}>Nhắn tin</Button>
                  </Space>
                </div>

                <Divider />
                <div className="flex justify-around">
                  <Statistic title="Người theo dõi" value={user.followers} />
                  <Statistic title="Đang theo dõi" value={user.following} />
                  <Statistic title="Bài viết" value={user.posts.length} />
                </div>
              </Card>

              <Card title="Thông tin cơ bản" className="shadow mb-2">
                <Space direction="vertical" className="w-full">
                  <Text>
                    <EnvironmentOutlined className="mr-2 text-blue-500" />
                    {user.location}
                  </Text>
                  <Text>
                    <MailOutlined className="mr-2 text-blue-500" />
                    {user.email}
                  </Text>
                  <Text>
                    <PhoneOutlined className="mr-2 text-blue-500" />
                    {user.phone}
                  </Text>
                  <Text>
                    <LinkOutlined className="mr-2 text-blue-500" />
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.website}
                    </a>
                  </Text>
                  <Text>
                    <CalendarOutlined className="mr-2 text-blue-500" />
                    Tham gia từ {user.joinDate}
                  </Text>
                </Space>

                <Divider />

                <div className="mb-6">
                  <Title level={4}>Mạng xã hội</Title>
                  <Space className="w-full justify-around">
                    <a
                      href={user.socialLinks.github}
                      className="text-2xl hover:text-blue-500"
                    >
                      <GithubOutlined />
                    </a>
                    <a
                      href={user.socialLinks.linkedin}
                      className="text-2xl hover:text-blue-500"
                    >
                      <LinkedinOutlined />
                    </a>
                    <a
                      href={user.socialLinks.facebook}
                      className="text-2xl hover:text-blue-500"
                    >
                      <FacebookOutlined />
                    </a>
                    <a
                      href={user.socialLinks.twitter}
                      className="text-2xl hover:text-blue-500"
                    >
                      <TwitterOutlined />
                    </a>
                  </Space>
                </div>
              </Card>

              <Card title="Chức vụ" className="shadow mb-2">
                <Space wrap>
                  {user.skills.map((skill) => (
                    <Tag
                      key={skill}
                      color="blue"
                      style={{ padding: "4px 8px", margin: "4px" }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>

            <Col xs={24} lg={16}>
              <Card className="shadow">
                <Tabs
                  activeKey={selectedTab}
                  onChange={setSelectedTab}
                  size="large"
                >
                  <TabPane tab="Bài viết" key="1">
                    {user.posts.map((post, index) => (
                      <Card
                        key={index}
                        className="mb-6 hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
                        actions={[
                          <Tooltip key="like" title="Thích">
                            <Space>
                              <LikeOutlined className="text-sm md:text-base" />{" "}
                              <span className="text-sm md:text-base">
                                {post.likes}
                              </span>
                            </Space>
                          </Tooltip>,
                          <Tooltip key="comment" title="Bình luận">
                            <Space>
                              <MessageOutlined className="text-sm md:text-base" />{" "}
                              <span className="text-sm md:text-base">
                                {post.comments}
                              </span>
                            </Space>
                          </Tooltip>,
                          <Tooltip key="share" title="Chia sẻ">
                            <Space>
                              <ShareAltOutlined className="text-sm md:text-base" />{" "}
                              <span className="text-sm md:text-base">
                                {post.shares}
                              </span>
                            </Space>
                          </Tooltip>,
                        ]}
                      >
                        <Card.Meta
                          avatar={
                            <Avatar
                              src={user.avatar}
                              size={{
                                xs: 32,
                                sm: 40,
                                md: 48,
                                lg: 48,
                                xl: 48,
                                xxl: 48,
                              }}
                              className="border-2 border-blue-500"
                            />
                          }
                          title={
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                              <Text strong className="text-base sm:text-lg">
                                {post.title}
                              </Text>
                              <Text
                                type="secondary"
                                className="text-xs sm:text-sm"
                              >
                                {post.date}
                              </Text>
                            </div>
                          }
                          description={
                            <div className="mt-2 sm:mt-4">
                              <div className="text-sm sm:text-base mb-2 sm:mb-4">
                                {post.content}
                              </div>
                              <Image
                                preview={false}
                                src={post.image}
                                alt="Post image"
                                className="w-full max-h-40 sm:max-h-48 md:max-h-56 lg:max-h-64 min-h-40 sm:min-h-48 md:min-h-56 lg:min-h-64 object-cover rounded-lg"
                              />
                            </div>
                          }
                        />
                      </Card>
                    ))}
                  </TabPane>

                  <TabPane tab="Ảnh" key="3">
                    <Row gutter={[16, 16]}>
                      {user.gallery.map((image, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                          <Card
                            cover={
                              <Image
                                src={image}
                                alt={`gallery-${index}`}
                                style={{ borderRadius: "8px 8px 0px 0px" }}
                              />
                            }
                            actions={[
                              <LikeOutlined key="like" />,
                              <ShareAltOutlined key="share" />,
                              <DeleteOutlined key="delete" />,
                            ]}
                            className="hover:shadow-md no-body-card transition-all duration-300"
                          />
                        </Col>
                      ))}
                      <Col xs={24} sm={12} md={8}>
                        <Card className="h-full flex items-center justify-center hover:shadow-md transition-all duration-300">
                          <Upload>
                            <Button icon={<PlusOutlined />}>Thêm ảnh</Button>
                          </Upload>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserProfile;
