import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-9xl">4o4</h1>
        <h3 className="font-semibold text-3xl">Opps Page Not Found</h3>
        <p>Sorry The Page you are looking for doesn,t exist</p>
        <div className="pt-4">
          <Link
            to="/"
            className="btn bg-[#bb1a17] rounded-full hover:bg-[#d23d3a] text-white"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
