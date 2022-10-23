import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useRequest from "hooks/useRequest";

import Carousel from 'react-bootstrap/Carousel';
import movieAPI from "apis/movieAPI.js";
import "./banner.css"

const Banner = () => {
  const { data: banners, isLoading, error } = useRequest(movieAPI.getBanners); 
  return (
    <div className="bg-all mt-5 ">
      <Carousel>
        {banners?.map((banner) => {
        return (
          <Carousel.Item>
            <img
            
            className="container p-5"
              style={{maxWidth:"900px", maxHeight:"450px",minHeight:"300px"}}
              key={banner.maBanner}
              src={banner.hinhAnh}
              alt={`banner-${banner.maBanner}`}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
      </div>
  
  );
};

export default Banner;
