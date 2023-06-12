import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/catalog");
  };

  return (
    <div className="home">
      <Navbar homeLi={"homeLi"} />
      <div className="left">
        <div>
          <p className="welcome">WELCOME TO NATURE’S PALETTE!</p>
          <h1>Where Beauty and Diversity Bloom.</h1>
          <p className="explore-para">
            Explore our extensive selection of hundreds of exquisite products.
            No matter how remote, we deliver to all areas.
          </p>
          <button className="btn bag-btn" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Home;
