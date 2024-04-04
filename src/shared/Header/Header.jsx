import moment from "moment";
function Header() {
  return (
    <div className="max-w-7xl mx-auto text-center space-y-4 py-8">
      <div className="flex justify-center">
        <img className="text-center" src="/assets/news-logo.png" alt="" />
      </div>
      <p className="text-2xl text-gray-500 font-medium py-1">
        Journalism Without Fear or Favour
      </p>
      {moment().format("dddd, MMMM Do, YYYY")}
    </div>
  );
}

export default Header;
