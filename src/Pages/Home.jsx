import Header from "../shared/Header/Header";
import Nav from "../shared/Navbar/Nav";

function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <h1 className="text-3xl">This is home page</h1>
    </div>
  );
}

export default Home;
