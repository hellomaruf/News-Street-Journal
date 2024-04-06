import RightSideNav from "../Components/RightSideNav";
import Header from "../shared/Header/Header";
import Nav from "../shared/Navbar/Nav";
import { useParams, useLoaderData, Link } from "react-router-dom";

function NewsDetails() {
  const { id } = useParams();
  console.log(id);
  const allData = useLoaderData();
  const specificData = allData.find((news) => {
    return news._id === id;
  });
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Nav />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 border-2 p-6 rounded-lg">
          <img className="w-full" src={specificData.image_url} alt="" />
          <h2 className="font-bold text-3xl py-6">{specificData.title}</h2>
          <p>{specificData.details}</p>
          <Link to='/' className="btn bg-[#BB1A17] hover:bg-[#d23d3a] text-white my-5">
            All news in this Category
          </Link>
        </div>
        <div className="col-span-1">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
