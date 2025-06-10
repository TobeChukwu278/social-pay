import React from "react";

const tools = [
  {
    title: "Vehicles",
    image: "https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg/m/",
    available: true,
    user: { name: "FRANS" },
  },
  {
    title: "Apartments",

    image: "https://plus.unsplash.com/premium_photo-1673014201500-f13a3a4adf27?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    available: false,
    user: { name: "Lars" },
  },
  {
    title: "Fashion",
    image: "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    available: true,
    user: { name: "View More" },
  },
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTAwMjAzNjJ8fGVufDB8fHx8fA%3D%3D",
    available: true,
    user: { name: "View More" },
  },
  {
    title: "Shoes",
    image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzUyNjI5NHx8ZW58MHx8fHx8",
    available: true,
    user: { name: "View More" },
  },
  {
    title: "house",
    image: "https://media.istockphoto.com/id/2029982669/photo/luxury-villa-with-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=46h9zQH1V1tgzfqyG775ioQ7qasHxvZ2sZdrgzDL_10=",
    available: true,
    user: { name: "View More" },
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjU2NDg0MHx8ZW58MHx8fHx8",
    available: true,
    user: { name: "View More" },
  },
];

const ToolSlider = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap p-4 scrollbar-hide ">
      <div className="flex gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-60 shrink-0 bg-white rounded-md border border-gray-200 shadow-sm"
          >
            <div className="relative">
              <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-36 object-cover rounded-t-md"
              />
              {tool.available && (
                <div className="absolute bottom-2 left-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded shadow">
                  Free to borrow
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-base font-semibold">{tool.title}</h3>
              {tool.description && (
                <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
              )}
              <a href="#"><button className="flex items-center gap-2 mt-2 text-green-600 bg-red-300 rounded-lg p-1">

                <span className="text-sm font-medium">{tool.user.name}</span>
              </button>
              </a>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center w-60 text-blue-600 font-medium">
          <a href="#">All →</a>
        </div>
      </div>
    </div>
  );
};

export default ToolSlider;
