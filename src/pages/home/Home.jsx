import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
       
        
        <h1 style={{padding:"10%"}}>Home_page</h1>
      </div>
    </div>
  );
};

export default Home;
