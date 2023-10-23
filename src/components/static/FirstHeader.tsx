import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);
    if (window.scrollY >= 13) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="w-full py-3 flex items-center justify-center fixed bg-white">
        <div className="w-[95%]  h-full flex justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex w-[auto]  justify-between items-center">
              <div className="mr-20">
                <div className="text-[14px]">
                  Dirt<span className="text-[18px] font-bold">2</span>School
                </div>
              </div>
              <div className="flex max-md:hidden mx-2">
                <Link to="/mission">
                  <div className="mx-5 font-bold text-gray-500">
                    Our Mission
                  </div>
                </Link>
                <Link to="/contact">
                  <div className="mx-5 font-bold text-gray-500">Contact</div>
                </Link>
              </div>
            </div>
            <Link to="/register">
              <div className="max-sm:hidden ml-2">
                <button className="px-[24px] py-2 rounded-tl-[20px] rounded-br-[20px] bg-[#69BA00] text-white outline-none font-bold">
                  Get Started
                </button>
              </div>
            </Link>
            <div
              className="max-sm:flex hidden relative"
              onMouseLeave={onShow}
              onMouseEnter={onShow}
            >
              <FiMenu className="text-3xl hover:cursor-pointer hover:scale-125 duration-300" />
              {show ? (
                <div className="absolute flex flex-col items-center rounded-lg shadow-lg bg-gray-400 top-[30px] right-0 h-auto">
                  <Link to="/register">
                    <div className="mt-2 px-3 w-[100px] text-[15px] hover:text-white duration-all duration-300 flex justify-center">
                      Sign up
                    </div>
                  </Link>
                  <Link to="/signin">
                    <div className="mt-[6px] px-3 w-[100px] pb-2 text-[15px] hover:text-white duration-all duration-300 flex justify-center">
                      Sign in
                    </div>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
