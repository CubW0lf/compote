import * as Icons from "react-icons/fa";

const DynamicIcon = ({ name }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return <Icons.FaExternalLinkAlt />;
  }

  return <IconComponent />;
};

export default DynamicIcon;
