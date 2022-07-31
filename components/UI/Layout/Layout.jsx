import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import dynamic from "next/dynamic";
const NavModal = dynamic(() => import("../../NavModal/NavModal"), { ssr: false });
import Pusher from "../Pusher/Pusher";

const Layout = ({ children, infos, networks }) => {
  return (
    <>
      <Navbar networks={networks} />
      <Pusher />
      {children}
      <NavModal />
      <Footer infos={infos} networks={networks} />
    </>
  );
};

export default Layout;
