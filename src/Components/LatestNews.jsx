import Marquee from "react-fast-marquee";
function LatestNews() {
  return (
    <div className="bg-gray-100 my-2 flex  items-center">
      <button className="btn bg-[#BB1A17] text-white ">Breaking News</button>
      <Marquee speed={100} gradient gradientColor="white" gradientWidth={100}>
        <div className=" py-4 flex gap-3">
          <p className="mr-6">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="mr-6">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="mr-6">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </div>
      </Marquee>
    </div>
  );
}

export default LatestNews;
