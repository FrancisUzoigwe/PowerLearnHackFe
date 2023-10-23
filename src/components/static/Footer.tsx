const Footer = () => {
  return (
    <div>
      <div className="w-[100%]  bg-[green] justify-center items-center flex mt-5">
        <div
          className="w-[95%] flex justify-between  items-center
 flex-wrap gap-[8px] max-sm:flex-col max-sm:w-85 max-md:w-85"
        >
          <div
            className="w-[20%] h-[45vh] flex   flex-col  gap-[10px] bg-[]  max-sm:w-72
   max-md:w-72 max-lg:w-72"
          >
            <div
              className="w-[100%] h-[65px] flex gap-[10px] bg-[]
       items-center"
            ></div>
            <b className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Careers
            </b>
            <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Investors
            </span>
            <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Sitemap
            </span>
            <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Terms
            </span>
          </div>
          {/* <div
            className="w-[20%] h-[35vh] flex flex-col bg-[] gap-[7px]
     max-sm:w-72 max-md:w-screen max-lg:w-screen"
          >
            <b className="text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Categories
            </b>
            <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Video for business
            </span>
            <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Video for Works
            </span>
            <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Video for Blog
            </span>
            <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Video for Terms
            </span>
            <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Video on Careers
            </span>
            <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Video on Investors
            </span>
            <span className="text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Video for a product
            </span>
          </div> */}
          <div
            className="w-[20%] h-[35vh] flex  flex-col gap-[10px]
     max-sm:w-72 max-md:w-screen max-lg:w-screen"
          >
            <b className="text-[#fff] hover:text-[#000] cursor-pointer">
              About
            </b>
            <span
              className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63"
            >
              works
            </span>
            <span
              className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63"
            >
              Pricing
            </span>
            <span
              className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63"
            >
              About
            </span>
            <span
              className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63"
            >
              Process
            </span>
            <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Blog
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
