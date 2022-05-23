import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://images.news18.com/ibnlive/uploads/2020/04/zoom.jpg"
          alt="Logo"
        />
        <span className="help-text">Meeting</span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  );
};

export default Header;
