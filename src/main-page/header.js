import logo from "./househuntlogo.png";
import { Link } from 'react-router-dom';


const Header = ({ subtitle }) => (
    <header className="row">
        <div className="col-md-5">
            <Link to='/'>
              <img src={logo} className="logo" alt="logo" />
            </Link>
        </div>
        <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
);

export default Header;