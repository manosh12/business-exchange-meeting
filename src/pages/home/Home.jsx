import { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import '../../App.css';
import { ExchangeMeeting_Overview } from "../../components/ExchangeMeeting_Overview.jsx";
import { FaArrowDownLong } from "react-icons/fa6";
import {Link, useLocation} from "react-router-dom";
import {Contact} from "../../components/Contact.jsx";
import {Fade} from "react-awesome-reveal";

export const Home = () => {
  const [showArrow, setShowArrow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const hash = location.hash.substring(1);
    const element = document.getElementById(hash);

    console.log(element);
    if (element) {
      const yOffset = -100;
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  }, [location]);


  return (
    <div className="text-gray-600">
      <div className="container mx-auto max-w-6xl">
        <Fade direction={"down"}>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-20 mx-5 lg:mt-14">
          {/* Image section */}
          <div className="order-1 sm:order-2 flex justify-center items-center mt-10 sm:mt-0">
            <img src="/images/bg_hero.jpg" alt="business-exchange" className="w-full sm:w-auto"/>
          </div>

          {/* Content section */}
          <div className="order-2 sm:order-1 sm:mt-20">
            <h1 className="lg:text-4xl text-2xl font-bold">ビジネス交流会へよこそ、</h1>
            <p className="lg:mt-16 mt-10">
              1.4万人以上のフリーランス・営業代行会社の中から
              厳選された一流のセールスパートナーを活用し、貴社の営業拡大をサポート
            </p>
            <div className="flex flex-col lg:flex-row lg:items-start items-center gap-5 lg:mt-20 mt-10">
              <Button radius="none"
                      className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white font-bold rounded-sm w-[200px]"
                      size="lg">
                無料で参加
              </Button>
              <Link to="#contact">
                <Button variant="bordered" radius="none"
                        className="text-gray-600 font-bold border-1 border-cyan-600 rounded-sm w-[200px]"
                        size="lg">お問い合せ
                </Button>
              </Link>
            </div>
          </div>
        </div>
        </Fade>


        <div className="grid sm:grid-cols-3 gap-20 mx-5 mt-16">
          <Fade direction={"left"}>
            <div className="flex justify-center items-center">
              <div>
                <h4 className="font-bold text-2xl">利用企業数の累計</h4>
                <div
                  className="w-[150px] h-[150px] flex items-center justify-center border border-gray-600 rounded-full text-lg font-bold flex-col mt-10 text-gray-600 shadow-2xl">
                  20社
                  <span className="text-lg">以上</span>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction={"down"}>
          <div className="flex justify-center items-center">
            <div>
              <h4 className="font-bold text-2xl">利用企業数の累計</h4>
              <div
                className="w-[150px] h-[150px] flex items-center justify-center border border-gray-600 rounded-full text-lg font-bold flex-col mt-10 text-gray-600 shadow-2xl">
                500名
                <span className="text-lg">以上</span>
              </div>
            </div>
          </div>
          </Fade>

          <Fade direction={"right"}>
          <div className="flex justify-center items-center">
            <div>
              <h4 className="font-bold text-2xl">利用企業数の累計</h4>
              <div
                className="w-[150px] h-[150px] flex items-center justify-center border border-gray-600 rounded-full text-lg font-bold flex-col mt-10 text-gray-600 shadow-2xl">
                10社
                <span className="text-lg">以上</span>
              </div>
            </div>
          </div>
          </Fade>
        </div>

        {showArrow && (
          <Link to="/#business_exchange" className="hidden lg:block">
            <div className="flex justify-center items-end">
              <FaArrowDownLong
                className="text-gray-600 text-2xl lg:text-3xl font-thin mb-2 animate-moveUpDown absolute bottom-8"/>
            </div>
          </Link>
        )}

      </div>
      {/* Exchange Meeting Overview component */}
      <ExchangeMeeting_Overview/>

      {/* Contact us component */}
      <Contact/>
    </div>
  );
};
