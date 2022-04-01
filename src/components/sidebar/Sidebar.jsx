import "./sidebar.scss";
import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PercentIcon from '@mui/icons-material/Percent';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";



const Sidebar = () => {
  const [dropdownOpen, setOpen] = React.useState(false);
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", color:"rgb(165, 92, 220)"}}>
          <span className="icon"><AccountCircleOutlinedIcon /> Fleto Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"></p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title" style={{ 
            }}>Monetization</p>
          <Link to="/users/new" style={{ textDecoration: "none" }}>
            <li>
              <PercentIcon className="icon" />
              <span>Promo code</span>
            </li>
          </Link>
          {/* <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link> */}
          <li>
            <CreditCardIcon className="icon" />
            <span>Referal</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Banners</span>
          </li>
          <p className="title">Data visuals</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Feedbacks</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>


          


          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}>
            <ExitToAppIcon className="icon" style={{
              color: "crimson",
              
            }}/>
            <span style={{
              color: "crimson",
            
            }}>Logout</span>
          </li>
          
        </ul>
      </div>
      
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
