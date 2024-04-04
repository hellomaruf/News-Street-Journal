import { useLoaderData } from "react-router-dom";
import LatestNews from "../Components/LatestNews";
import LeftSideNav from "../Components/LeftSideNav";
import RightSideNav from "../Components/RightSideNav";
import Header from "../shared/Header/Header";
import Nav from "../shared/Navbar/Nav";

function Home() {
  const news = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <LatestNews />
      <Nav />
      <div className="grid grid-cols-4 gap-8">
        <div className=" ">
          <LeftSideNav />
        </div>
        <div className="col-span-2">
          {news.map((item, index) => (
            <div className="border-2 mb-6 rounded-lg" key={index}>
              <div className="flex justify-between items-center bg-gray-200 px-4 rounded-lg mb-6  py-3">
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full w-14"
                    src={item?.author.img}
                    alt=""
                  />
                  <div className="">
                    <h3 className="font-semibold text-md">
                      {item?.author.name}
                    </h3>
                    <p>{item?.author.published_date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <i className="ri-bookmark-line text-2xl font-medium"></i>
                  <i className="ri-share-line text-2xl font-medium"></i>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold py-3">{item?.title}</h2>
                <img src={item?.image_url} alt="" />
                <p className="py-3">{item?.details}</p>
                <div className="flex justify-between">
                  <div className="flex items-center text-md gap-2">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    {item?.rating.number}
                    <div className="badge badge-accent text-white">
                      {item?.rating.badge}
                    </div>
                  </div>
                  <div className=" flex items-center gap-2">
                    <i className="ri-eye-line text-xl"></i>
                    {item?.total_view}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

export default Home;
