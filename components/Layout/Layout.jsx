import Navbar from "../Navbar/Navbar";
import NavModal from "../NavModal/NavModal";
import Pusher from "../Pusher/Pusher";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Pusher />
      {children}
      <NavModal />
    </>
  );
};

export default Layout;
