import "./Home.css";
import items from "../data/items";
import fav from "../assets/fav.png"
import InfoBanner from "../Footer/InfoBanner";


function Home() {
  return (
    <div className="home-container">
      <h3>Newly added items</h3>
      <div className="card-grid" >
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="price-row">
              <h5>{item.price}</h5>
               <img src={fav} alt="fav" className="heart-icon" />
            </div>
            <p className="title">{item.title}</p>
            <div className="bottom-info">
              <p>{item.location}</p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
       <InfoBanner /> {/* ⬅️ place it just below card grid */}
    </div>
  );
}

export default Home;
