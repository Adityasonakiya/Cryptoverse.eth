import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutelined,MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from 'antd';
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
          <Avatar src={icon} size="large"/>
          <Typography.Title level={2} className='logo'>
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar;