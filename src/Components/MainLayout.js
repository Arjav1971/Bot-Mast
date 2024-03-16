// 
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { Layout, Menu, Button, theme } from 'antd';
import './Mainlayout.css'; // Import the CSS file here
import logoAppoinments from '../Assets/FrameAppointments.svg';
import logoDashboard from '../Assets/Dashboard.svg';
import logoInventory from '../Assets/Inventory.svg';
import logoCampaigns from '../Assets/FrameCampaigns.svg';
import logoSetings from '../Assets/FrameSettings.svg';
import logoNotifications from '../Assets/Alert BadgeNotifications.svg';
import logoleft from '../Assets/Frame 1000001788Left.svg';
import logoright from '../Assets/Frame 1000001797right.svg';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
 
  {!collapsed && (
    <span className="icon-wrapper">
      <RiArrowDropDownLine className='drop'/>
    </span>
  )}
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#FDFDFD' }}>
     
      <div className="logo">
        <div className="logo-content  width: Hug (140px) height: Fill (32px) border-radius: 8px gap: 4px">
          <span className={collapsed ? 'sm-logo' : 'lg-logo'} >Aria Real Estate </span>
          {!collapsed && (<span className="icon-wrapper"><RiArrowDropDownLine className='drop'/></span> )}
        </div>
        <Button className="logo-button" type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)}style={{
      fontSize: '16px',
      width: 'Hug (32px)',
      height: 'Hug (32px)',
      padding: '4px',
      gap: '10px',
      }}
    />



</div>

       
        <Menu className='menu-1'
         
          mode="inline"

          items={[
            {
              key: '1',
              icon: <img src={logoDashboard} alt="" className='symbols'/>,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <img src={logoCampaigns} alt="" className='symbols'/>,
              label: 'Campaigns',
            },
            {
              key: '3',
              icon: <img src={logoInventory} alt="" className='symbols'/>,
              label: 'Inventory',
            },
            {
              key: '4',
              icon: <img src={logoAppoinments} alt="" className='symbols'/>,
              label: 'Appoinments',
            },
          ]} style={{ background: '#FDFDFD' }}
        />
         <Menu className='menu-2'
         
         mode="inline"

         items={[
           {
             key: '1',
             icon: <img src={logoSetings} alt="" className='symbols'/>,
             label: 'Org Settings',
           },
           {
             key: '2',
             icon:  <img src={logoNotifications} alt="" className='symbols'/>,
             label: 'Notifications',
           },
          

         ]} style={{ background: '#FDFDFD' }}
       />
        <div className="user-info-bottom">
          {!collapsed ? (
          <div className="user-info">
            <div className="user-photo">
              <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="User" className="user-photo-img" />
            </div>
            <div className="user-name">
              <p className='mb-0'>Mehul Agarwal</p>
            </div>
            <div className='dots'>
              <BsThreeDotsVertical/>
            </div>
          </div>
        ) : (
          <div className="user-photo">
            <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="User" className="user-photo-img" />
          </div>
        )}
      </div>


      </Sider>
      <Layout>
        <Header className="trigger" >
          <div className='campaign'>
            <img src={logoleft}  className="left" alt=""/>
            <img src={logoright} className="right" alt=""/>





          </div>
        </Header>
        <Content
          className="ant-layout" // Apply "ant-layout" class here
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
