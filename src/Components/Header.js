import LOGO_URL from "../utils/constant"
import { Link } from "react-router-dom";
let Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src= {LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li> <Link to ="/">Home</Link></li>
            <li>
             <Link to = "/about"> About <span className="red">Us</span></Link>
            </li>
            <li>
             <Link to = "contact"> Contact<span className="red"> Us</span></Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;  