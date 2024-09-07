import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
      <div>
        <Nav></Nav>
        <div className="min-h-[calc(100vh-120px)] flex justify-center items-center pt-16 z-10">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;