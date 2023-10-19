const HomeScreen = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-[95%] h-auto">
        <div className="w-full h-[340px]  flex justify-between ">
          <div className="flex flex-col h-[300px]">
            <div className="text-2xl mt-7">
              Welcome <span className="font-bold">Francis</span>, you have
              brought 0 bags
            </div>
            <div className="flex mt-5 flex-wrap">
              <div className="w-[250px] h-[180px] border rounded-md flex items-center justify-center hover:shadow-md cursor-pointer transition-all duration-300 mx-8 my-2">
                <div className="flex flex-col items-center w-[90%] h-[90%] justify-cente ">
                  <div className="mt-5 text-5xl font-bold">0</div>
                  <div className="mt-14">Total Bags</div>
                </div>
              </div>
              <div className="w-[250px] h-[180px] border rounded-md flex items-center justify-center hover:shadow-md cursor-pointer transition-all duration-300 mx-8 my-2">
                <div className="flex flex-col items-center w-[90%] h-[90%] justify-cente ">
                  <div className="mt-5 text-5xl font-bold">0</div>
                  <div className="mt-14">Total Bags</div>
                </div>
              </div>
              <div className="w-[250px] h-[180px] border rounded-md flex items-center justify-center hover:shadow-md cursor-pointer transition-all duration-300 mx-8 my-2">
                <div className="flex flex-col items-center w-[90%] h-[90%] justify-cente ">
                  <div className="mt-5 text-5xl font-bold">0</div>
                  <div className="mt-14">Total Bags</div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="w-[270px] rounded-md h-full bg-gray-400 max-md:hidden flex flex-col items-center">Right</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
