import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="item" style={{position: "absolute", padding:"17%"}}>
            <ListOutlinedIcon className="icon" />
          </div>
        <div className="items">
          
         
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter"></div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter"></div>
          </div>
          <div>
            <h3 style={{padding: "0", margin: "0", position:"relative"}}>Alan walker</h3>
            <p style={{padding: "0", margin: "0", position:"absolute"}}>Coimbatore</p> 
          </div>
          <div></div>
         
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
