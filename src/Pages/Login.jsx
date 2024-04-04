import { Link } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";

function Login() {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <div className="bg-gray-100 py-20">
        <h1 className="text-center font-semibold text-2xl pb-7">
          Login your account
        </h1>
        <form className="card-body max-w-3xl mx-auto bg-white rounded-xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#BB1A17] text-white">Login</button>
          </div>
          <p>
            If you are new here then{" "}
            <Link className="font-bold text-[#BB1A17] underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
