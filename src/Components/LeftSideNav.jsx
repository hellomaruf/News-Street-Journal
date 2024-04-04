import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function LeftSideNav() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("right-news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">All Category</h1>
      <div className="mt-6">
        {category.map((item, index) => (
          <NavLink
            to={item?.id}
            className="block py-2 mb-3 px-4 font-medium text-md rounded-lg bg-gray-50 hover:bg-gray-100"
            key={index}
          >
            {item?.name}
          </NavLink>
        ))}
      </div>
      <div className="">
        {news.map((item, index) => (
          <div className="py-4" key={index}>
            <img className="rounded-lg" src={item?.img} alt="" />
            <h2 className="font-semibold text-xl pt-2">{item?.title}</h2>
            <div className="flex items-center justify-between py-4">
              <p className="font-semibold text-gray-500">{item?.category}</p>
              <p>{item?.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSideNav;
