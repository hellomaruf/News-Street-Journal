import LatestNews from "../Components/LatestNews";
import LeftSideNav from "../Components/LeftSideNav";
import RightSideNav from "../Components/RightSideNav";
import Header from "../shared/Header/Header";
import Nav from "../shared/Navbar/Nav";

function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <LatestNews />
      <Nav />
      <div className="grid grid-cols-4 gap-4">
        <div className="border bg-gray-300">
          <LeftSideNav />
        </div>
        <div className="border bg-gray-300 col-span-2">
          news comming soon*******
        </div>
        <div className=" border bg-gray-300">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

export default Home;
