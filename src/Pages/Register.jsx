import { Link } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";

function Register() {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <div className="bg-gray-100 py-20">
        <h1 className="text-center font-semibold text-2xl pb-7">
          Register your account
        </h1>
        <form className="card-body max-w-3xl mx-auto bg-white rounded-xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Choess your Photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
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
              name="password"
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
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <p>
              Accept <span className="font-semibold ">Term & Conditions</span>
            </p>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-[#BB1A17] hover:bg-[#d23d3a] text-white">
              Register
            </button>
          </div>
          <p>
            Already have Account?{" "}
            <Link className="font-bold text-[#BB1A17] underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
