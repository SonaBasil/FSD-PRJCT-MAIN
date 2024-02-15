import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <div className="hotelContainer">
        {/* Hotel Jane 1 */}
        <div className="hotel">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">Hotel Jane 1</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              Hotel description
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">$200</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <Link to={'/hotels/${item._id}'}>
                <button className="siCheckButton">See availability</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hotelContainer">
        {/* Hotel Jane 2 */}
        <div className="hotel">
          <img
            src="https://images7.alphacoders.com/362/362619.jpg"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">Hotel Jane 2</h1>
            <span className="siDistance">600m from center</span>
            <span className="siTaxiOp">Free city shuttle</span>
            <span className="siSubtitle">
              Deluxe Room with Ocean View
            </span>
            <span className="siFeatures">
              Hotel description
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Superb</span>
              <button>9.2</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">$150</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <Link to={'/hotels/${item._id}'}>
                <button className="siCheckButton">See availability</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
