import "./Card.css"

import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";

import { useState } from "react";

const Card = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const handleNotification = () => {
        setLiked((prevState) => (!prevState))
    }
    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" className="userImg" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" className="postImg" />
            <div className="interaction">
                {liked ? (
                    <img
                        src={HeartFilled} alt="" className="cardIcon"
                        onClick={() => handleNotification()} />
                ) : (
                        <img
                            src={Heart}
                            alt=""
                            className="cardIcon"
                            onClick={() => handleNotification()}
                        />
                    )}
                <img
                    src={Comment}
                    alt=""
                    className="cardIcon"
                // onClick={() => handleNotification(2)}
                />
                <img
                    src={Share}
                    alt=""
                    className="cardIcon"
                // onClick={() => handleNotification(3)}
                />
                <img src={Info} alt="" className="cardIcon infoIcon" />
            </div>
        </div>
    )
}

export default Card;