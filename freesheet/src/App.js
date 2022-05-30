import { Layout, Menu } from "antd";
import { APP_NAME } from "./util/constants";

import { Routes, Route, Link, Router } from "react-router-dom";
import UploadPage from "./components/UploadPage";

import logo from "./assets/logo.png";
import "antd/dist/antd.min.css";
import "./App.css";
import About from "./components/About";
import Exchange from "./components/Exchange";
import Access from "./components/Access";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Link to="/">
              <Menu.Item key="0">
                <img src={logo} className="header-image" />
              </Menu.Item>
            </Link>
            <Link to="/upload">
              <Menu.Item key="1">Upload</Menu.Item>
            </Link>
            <Link to="/exchange">
              <Menu.Item key="2">Exchange</Menu.Item>
            </Link>
            <Link to="/access">
              <Menu.Item key="3">Access</Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item key="4">About</Menu.Item>
            </Link>
          </Menu>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/onboard/:cid" element={<Access />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
        <Footer>
          {APP_NAME} &copy;2022 - Built for the Cortx 2022 Hackathon
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
