import React from "react";

import { Layout, Menu, Row, Col, Button, Image, Progress, Card } from "antd";
import "./index.css";
const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#fff",
          }}
        >
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1"> HOME </Menu.Item>
            <Menu.Item key="2"> ABOUT </Menu.Item>
            <Menu.Item key="3"> WORK </Menu.Item>
            <Menu.Item key="4"> PROCESS </Menu.Item>
            <Menu.Item key="5"> SERVICES </Menu.Item>
            <Menu.Item key="6"> TESTIMONIALS </Menu.Item>
            <Menu.Item key="7"> CONTACT </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Row>
            <Col
              offset={12}
              style={{
                marginTop: "124px",
              }}
            >
              <h1> We Design and Develop </h1>
              <p>
                We are a new design studio based in USA.We have over 20 years of
                combined experience, and know a thing or two about designing
                websites and mobile apps.
              </p>
              <Button
                style={{
                  backgroundColor: "#64c9c6",
                }}
              >
                Contact us
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Layout
        style={{
          backgroundColor: "white",
        }}
      >
        <Content
          style={{
            backgroundColor: "white",
            paddingTop: "0px",
            paddingBottom: "18px",
          }}
        >
          <Row>
            <Col offset={10}>
              <h1> About Us </h1>
            </Col>
          </Row>
          <Row>
            <Col offset={8} span={7}>
              <p>
                Divide have don 't man wherein air fourth. Own itself make have
                night won' t make.A you under Seed appear which good give.Own
                give air without fowl moveth dry first heaven fruit, dominion
                she 'd won' t very all.
              </p>
            </Col>
          </Row>
          <Row>
            <Col offset={10}>
              <Image
                src="https://dawoodulislam.github.io/piroll/img/signature.png"
                class="img-fluid"
                alt="Signature"
              />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Layout
        style={{
          backgroundColor: "pink",
        }}
      >
        <Content
          style={{
            backgroundColor: "pink",
            paddingBottom: "0px",
          }}
        >
          <Row>
            <Col offset={3} span={6} style={{ marginTop: "100px" }}>
              <h1> Professional Skills </h1>
              <p>UI/UX DESIGN</p>
              <Progress percent={50} showInfo={false} />
              <p>WEB DEVELOPMENT 90%</p>
              <Progress percent={50} showInfo={false} />
              <p>MARKETING 65%</p>
              <Progress percent={50} showInfo={false} />
              <Row>
                <Col></Col>
              </Row>
            </Col>
            <Col span={12} offset={1}>
              <Image
                src="https://image.shutterstock.com/image-photo/horizontal-photo-minimal-workplace-computer-260nw-1939585138.jpg"
                class="img-fluid"
                alt="Signature"
                style={{ width: "923px" }}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Layout >
        <Content  >
          <Row gutter={24}>
            <Col span={5} offset={2}>
              <Card bordered={false} hoverable style={{ width: "335px",height:" 243px"}}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col span={5}>
              <Card  bordered={false} style={{ width: "335px",height:" 243px"}}>
                Card content
              </Card>
            </Col>
            <Col span={5}>
              <Card  bordered={false} style={{ width: "335px",height:" 243px"}}>
                Card content
              </Card>
            </Col>
            <Col span={5}>
              <Card  bordered={false} style={{ width: "335px",height:" 243px"}}>
                Card content
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
