

function RightSideNav() {
 
  return (
    <div className="">
      <h1 className="text-2xl font-semibold pb-3">Login With</h1>
      <div className="flex flex-col space-y-3">
        <button className="p-2 border flex items-center justify-center gap-3 font-medium rounded-lg bg-gray-100 hover:bg-gray-200 duration-150">
          <img className="w-6" src="assets/google.png" alt="" /> Login With
          Google
        </button>
        <button className="p-2 border flex items-center justify-center gap-3 font-medium rounded-lg bg-gray-100 hover:bg-gray-200 duration-150">
          <img className="w-6" src="assets/github.png" alt="" /> Login With
          Github
        </button>
      </div>
      <div className="flex flex-col pt-8">
        <h1 className="text-2xl font-semibold pb-3">Find us on</h1>

        <a
          href="#"
          className="p-4 hover:bg-gray-200 duration-150 border-t-2 font-medium  border-x-2 flex items-center rounded-t-lg gap-3  bg-gray-100"
        >
          <i className="ri-facebook-circle-fill text-2xl"></i> Facebook
        </a>
        <a
          href="#"
          className="p-4 hover:bg-gray-200 duration-150 border-2 font-medium flex items-center  gap-3  bg-gray-100"
        >
          {" "}
          <i className="ri-instagram-fill text-2xl"></i>
          Instagram
        </a>
        <a
          href="#"
          className="p-4 hover:bg-gray-200 duration-150 border-b-2 font-medium border-x-2 flex items-center gap-3 rounded-b-lg bg-gray-100"
        >
          {" "}
          <i className="ri-twitter-x-fill text-2xl"></i> Twitter
        </a>
      </div>
      <div className="pt-6 bg-gray-100 mt-8 p-2">
        <h1 className="text-2xl font-semibold pb-3">Q-zone</h1>
        <div className="space-y-4">
          <img className="w-full" src="/assets/qZone1.png" alt="" />
          <img className="w-full" src="/assets/qZone2.png" alt="" />
          <img className="w-full" src="/assets/qZone3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSideNav;
