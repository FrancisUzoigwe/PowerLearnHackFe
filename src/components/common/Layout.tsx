import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="mt-[60px]">
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;