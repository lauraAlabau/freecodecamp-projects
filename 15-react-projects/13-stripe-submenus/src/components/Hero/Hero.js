import React from "react";
import { useGlobalContext } from "../../contexts/context";

import phoneImg from "../../images/phone.svg";

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return <h2>hero component</h2>;
};

export default Hero;
