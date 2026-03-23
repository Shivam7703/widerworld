import React from "react";

function ConDetail({ data }: any) {
  return (
    <div className="lg:px-24 md:px-20 sm:p-12 p-7 xl:px-32 mx-auto relative flex justify-between flex-wrap gap-y-5">
      <div className="bg-gradient-to-r from-blue-800 to-blue-950 w-full h-1/2 absolute bottom-0 left-0 z-0" />
      {data?.map((item: any, index: number) => (
        <div
          key={index}
          className="group relative border hover:border-none bg-white z-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 md:w-[31%] w-full overflow-hidden hover:-translate-y-1"
        >
          {/* <div className="group-hover:w-full h-full w-0 absolute top-0 left-0 duration-300 bg-gradient-to-t from-blue-600 to-blue-800 transition-all -z-10"></div> */}

 {/* Decorative Background */}
      <div className="absolute h-0 w-full top-0 left-0 bg-gradient-to-br from-blue-900 via-violet-800
                   to-red-700 group-hover:h-full  transition-all duration-500 -z-10"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-25 
                      transition-opacity duration-500 z-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full 
                        -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full 
                        -ml-12 -mb-12" />
      </div>



          <div className="flex h-full  items-center justify-between gap-5 z-10 p-6">
            <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-zinc-100 to-white group-hover:from-white group-hover:to-zinc-100 rounded-lg py-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="text-3xl mx-auto text-red-600   max-w-min">
                {item?.icon}
              </div>
            </div>
            <div className="h-full w-[1px] bg-zinc-300"></div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-white  duration-300">
                {item?.title}
              </h3>
              <a
                href={item?.slug}
                className="text-gray-600 group-hover:text-white cursor-pointer transition-colors duration-300 font-medium flex items-center gap-2 group/link"
              >
                <span className=" duration-300">{item?.text}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConDetail;
