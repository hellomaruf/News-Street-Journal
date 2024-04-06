import { Link } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";
import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginUser } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        // navigate after login........
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <div className="bg-gray-100 py-20">
        <h1 className="text-center font-semibold text-2xl pb-7">
          Login your account
        </h1>
        <form
          onSubmit={handleSignIn}
          className="card-body max-w-3xl mx-auto bg-white rounded-xl"
        >
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
          <div className="form-control mt-4">
            <button className="btn bg-[#BB1A17] hover:bg-[#d23d3a] text-white">
              Login
            </button>
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
