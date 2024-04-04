import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function LeftSideNav() {
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
    </div>
  );
}

export default LeftSideNav;
