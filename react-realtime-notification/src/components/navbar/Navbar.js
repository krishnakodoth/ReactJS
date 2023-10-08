import "./Navbar.css";
import Notification from"../../img/notification.svg"
import Message from"../../img/message.svg"
import Settings from"../../img/settings.svg"

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Sample App</span>
            <div className="icons">
                <div className="icon">
                    <img src={Notification} className="iconimg" alt="" />
                    <div className="counter">2</div>
                </div>
            </div>
            <div className="icons">
                <div className="icon">
                    <img src={Message} className="iconimg" alt="" />
                    <div className="counter">2</div>
                </div>
            </div>
            <div className="icons">
                <div className="icon">
                    <img src={Settings} className="iconimg" alt="" />
                    <div className="counter">2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;