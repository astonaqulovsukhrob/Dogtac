import React, { useEffect, useState } from "react";
import { Layout, Menu, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SkladDetali from "../Sklad/SkladDetali";
import SkladKomplekt from "../Sklad/SkladKomplekt";
import SkladP from "../Sklad/SkladP";
import Prodazha from "../Prodazha/Prodazha";
import Vozvarat from "../Vozvarat/Vozvarat";
import Brony from "../Brony/Brony";
import Spravochniki from "../Spravochniki/Spravochniki";
import Sotrudniki from "../Sotrudniki/Sotrudniki";
import Sms from "../Sms/Sms";
import Otcheny from "../Otcheny/Otcheny";
import Asosi from "../Asosi/Asosi";
import AntTabs from "../Tabs/AntTabs";
import Klient from "../Spravochniki/Klient";
import Postavchiki from "../Spravochniki/Postavchiki";
import Sklad from "../Spravochniki/Sklad";
import Model from "../Spravochniki/Model";
import Detal from "../Spravochniki/Detal";
import Komplekt from "../Spravochniki/Komplekt";
import SatsialniSet from "../Spravochniki/SatsialniSet";
import dataNav from "./DataNavbar";
import { classItem, tabsItem } from "../../Redux/Actions";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  const tabs = useSelector((state) => state.allData?.tabs);
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleChildren = (list) => {
    const data = tabs?.find((item) => item.key == list.key);
    if (data) {
      return dispatch(tabsItem([...tabs]));
    } else {
      return dispatch(tabsItem([...tabs, list]));
    }
  };

  const handleMenu = (list) => {
    const data = tabs?.find((item) => item.key == list.key);
    if (data) {
      return dispatch(tabsItem([...tabs]));
    } else {
      return dispatch(tabsItem([...tabs, list]));
    }
  };

  return (
    <Layout style={{ minHeight: "98vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <div
            theme="dark"
            style={{
              height: 50,
              fontSize: 30,
              letterSpacing: 3,
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            <h2 className="text-white">Dogtac</h2>
          </div>
          {dataNav.map((menu) =>
            menu.children ? (
              <SubMenu key="sub1" icon={menu.icons} title={menu.text}>
                {menu.children.map((menuChild) => (
                  <Menu.Item
                    onClick={() => handleChildren(menuChild)}
                    key={menuChild.key}
                    icon={menuChild.icons}
                  >
                    <Link to={menuChild.path}>{menuChild.text}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                onClick={() => handleMenu(menu)}
                key={menu.key}
                icon={menu.icons}
              >
                <Link to={menu.path}>{menu.text}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="main-header-content">
            <Input
              style={{ width: 200, marginLeft: 0 }}
              placeholder="Search..."
              prefix={<SearchOutlined />}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginRight: 10,
              }}
            >
              <span style={{ color: "white" }}>Sukhrob</span>
              <img
                className="header-img"
                src="https://images.pexels.com/photos/10980216/pexels-photo-10980216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800"
                alt=""
              />
              <Button className="close">Chiqish</Button>
            </div>
          </div>
          <AntTabs />
        </Header>
        <Content style={{ margin: "10px 16px" }}>
          <Routes>
            <Route path={"/"} element={<Asosi />} />
            <Route path={"/sklad"} element={<Sklad />} />
            <Route path={"/postup-detali"} element={<SkladDetali />} />
            <Route path={"/postup-komplekt"} element={<SkladKomplekt />} />
            <Route path={"/peremeshenie"} element={<SkladP />} />
            <Route path={"/prodaja"} element={<Prodazha />} />
            <Route path={"/vozvrat"} element={<Vozvarat />} />
            <Route path={"/brony"} element={<Brony />} />
            <Route path={"/spravochniki"} element={<Spravochniki />} />
            <Route path={"/sotrudniki"} element={<Sotrudniki />} />
            <Route path={"/otcheny"} element={<Otcheny />} />
            <Route path={"/klient"} element={<Klient />} />
            <Route path={"/postavchiki"} element={<Postavchiki />} />
            <Route path={"/model"} element={<Model />} />
            <Route path={"/detal"} element={<Detal />} />
            <Route path={"/komplekt"} element={<Komplekt />} />
            <Route path={"/satsialniset"} element={<SatsialniSet />} />
            <Route path={"/sms"} element={<Sms />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
