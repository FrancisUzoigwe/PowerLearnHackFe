
const Footer = () => {
  return (
    <div>
    <div className="w-[100%] h-[90vh] bg-[green] justify-center items-center flex">
<div className="w-[95%] h-[80vh] flex justify-between
 flex-wrap gap-[8px] max-sm:flex-col max-sm:w-85 max-md:w-85">
    <div className="w-[40%] h-[30vh] flex   flex-col  gap-[10px]
    max-sm:w-72 max-md:w-screen max-lg:w-screen">
     <img src="" alt="" className="w-[30%] h-[50px] flex justify-center
      items-center object-cover bg-[#33333]"/>
      <div className="w-[60%] h-[45px] flex gap-[2px]">
      <img src="" alt="" className="w-[30%] h-[40px] flex justify-center
      items-center object-cover bg-[#33333]"/>
       <img src="" alt="" className="w-[30%] h-[40px] flex justify-center
      items-center object-cover bg-[#33333]"/>
       <img src="" alt="" className="w-[30%] h-[40px] flex justify-center
      items-center object-cover bg-[#33333]"/>
      </div>
<span className="text-[#000]">Contact Us:
    <span className="text-[#ffff]">hello@explain.ninja</span>
</span>

<span className="text-[#000]">©️Explain Ninja Studio, 2023</span>
    </div>
    <div className="w-[20%] h-[15vh]  gap-[2px] flex flex-col
     max-sm:w-72 max-md:w-screen max-lg:w-screen">
        <span className="text-[#fff]">Categories</span>
        <span className="text-[#000]">Video for business</span>
        <span className="text-[#000]">
            Video for a product
        </span>
        {/* <span>Categories</span> */}
     </div>
    <div className="w-[30%] h-[27vh] flex  flex-col gap-[2px]
     max-sm:w-72 max-md:w-screen max-lg:w-screen">
<b className="text-[#fff]">About</b>
<span>works</span>
<span>Pricing</span>
<span>About</span>
<span>Process</span>
<span>Blog</span>
<span>Contact Us</span>
     </div>
</div>
    </div>
    </div>
  )
}

export default Footer