import React from "react";
import { SlSocialDribbble } from "react-icons/sl";
import { Link } from "react-router-dom";
import config from "../../config/page";
const Diendan = () => {
  return (
    <div className="mb-6 rounded hover:shadow hover:bg-[#F0F7FF] py-2">
      <SlSocialDribbble className="inline-block w-6 h-6 mr-2 -mt-2"></SlSocialDribbble>
      Diễn đàn
    </div>
  );
};

export default Diendan;
