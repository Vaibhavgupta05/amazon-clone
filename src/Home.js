import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=" "
        />
        <div className="home_row">
          <Product
            id= "986165"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="287628"
            title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
            price={349.99}
            rating={4.7}
            image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="872699"
            title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case included), Black – US Version"
            price={129.99}
            rating={4.4}
            image="https://m.media-amazon.com/images/I/51ryw1he7xL._AC_UY218_.jpg"
          />
          <Product
            id="369336"
            title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
            price={189.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/819WMWm6NoL._AC_UY218_.jpg"
          />
          <Product
            id="992692"
            title="Gigabyte AERO 15 OLED XA-7US5130SP 15' UHD Amoled, i7-9750H, GeForce RTX 2070, 16GB RAM, 512GB SSD, W10 Pro, RGB KB, 94W Ultra Slim Laptop"
            price={1988.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51OrUs6oBRL._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="869833"
            title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)The Lean Startup"
            price={549.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
