import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const LayoutWebsite = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
