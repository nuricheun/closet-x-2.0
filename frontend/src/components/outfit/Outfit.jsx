import { withRouter } from "react-router-dom";

const OutfitShow = ({outfit, translateDelta}) => {
  

    const { imageURL, title, username } = outfit;

    return (
      <div
        className="outfit-item"
        style={{ transform: `translateX(${translateDelta}%)` }}
      >
        <div className="outfit-img-div">
          <img className="outfit-img" src={imageURL} alt="" />
        </div>
        <div>Title: {title}</div>
        <div>Username: {username}</div>
      </div>
    );
  }

export default withRouter(OutfitShow);
