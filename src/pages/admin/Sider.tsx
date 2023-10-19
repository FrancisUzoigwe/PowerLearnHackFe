import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsFolder } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CgLogOut } from "react-icons/cg";
import { useSelector } from "react-redux";

const Sider = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div className="max-sm:hidden">
      {toggle ? (
        <div className="h-[100vh] w-[65px] fixed bg-green-400 text-white pt-[10px]">
          <div className=" flex flex-col w-full h-[90px] hover:bg-[#f9bf548a] hover:text-[black] items-center justify-between px-[5px] hover:cursor-pointer transition-all duration-300 hover:rounded-md">
            <div className=" my-[5px] h-[40px] w-[40px] flex items-center justify-center rounded bg-[white]">
              <img alt="" className="w-[35px] " />
            </div>
            <HiChevronDoubleRight />
          </div>

          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md"
          >
            <LuLayoutDashboard className="text-[23px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BsFolder className="text-[23px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <HiOutlineCalendar className="text-[25px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <LiaFacebookMessenger className="text-[27px]" />
          </div>
          <div className="mt-[200px] md:mt-[90px]" />
          <div
            className="flex w-[64.5px]
              h-[50px]
               hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <div
              className="h-[35px] flex items-center  mb-[5px] w-[25px] rounded
              [50px]
      hover:text-[black] hover:cursor-pointer transition-all duration-300"
            >
              <CgLogOut className="text-[25px]" />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] w-[200px] md:w-[150px] fixed bg-green-400 text-white pt-[10px]">
          <div
            className="
      flex
      w-full 
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a]
       hover:text-[black]
      items-center
      justify-between
      px-[5px]
      hover:cursor-pointer 
      transition-all 
      duration-300 
      hover:rounded-md"
          >
            <div
              className="
          my-[5px] 
          h-[40px] 
          w-[40px] 
          flex 
          items-center 
          justify-center 
          rounded 
          bg-[white] 
          ml-[10px]"
            >
              <img alt="" className="w-[35px] " />
            </div>
            <div className="text-[20px]">Astra</div>
            <HiChevronDoubleLeft />
          </div>

          <div
            className="flex w-full
      h-[50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md "
          >
            <LuLayoutDashboard className="text-[23px]" />
            <p className="ml-[15px] md:text-[14px]">Dashboard</p>
          </div>
          <div
            className="flex w-full
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BsFolder className="text-[23px]" />
            <p className="ml-[15px] md:text-[14px]">Projects</p>
          </div>
          <div
            className="flex w-full
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <HiOutlineCalendar className="text-[25px]" />
            <p className="ml-[15px] md:text-[14px]">Calendar</p>
          </div>
          <div
            className="flex w-full
      h-[50px]
      [50px]
      hover:bg-[#f9bf548a] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <LiaFacebookMessenger className="text-[25px]" />
            <p className="ml-[15px] md:text-[14px]">Messages</p>
          </div>
          <hr className="mt-[190px] md:mt-[140px]" />
          <div
            className="flex w-full
      h-[50px]
       hover:cursor-pointer transition-all duration-300  pl-[10px] mt-[0px] items-center "
          >
            <div
              className="h-[50px] flex items-center justify-center mb-[0px] w-[40px] rounded
              [50px]
               hover:text-[black] hover:cursor-pointer transition-all duration-300"
            >
              <CgLogOut className="text-[25px]" />
            </div>
            <span className="ml-[15px]">Log out</span>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Sider;
