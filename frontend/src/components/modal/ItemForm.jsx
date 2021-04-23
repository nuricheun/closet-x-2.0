import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import './modal.css'

const ItemForm = ({formType, item, fetchItem, match, history, show, action, toggleNewFormModal}) => {
  
const [state, setState] = useState({
    user: '',
    title: '',
    image: '',
    color: '',
    category: '',
    imageURL: ''
})

useEffect(()=>{
    if (formType === "Update Item") {
      fetchItem(match.params.itemId)
        .then(() => setState(...item));
    }
  }, [])

  const update = (field) => {
    return e => {
      setState({
        [field]: e.currentTarget.value
      });
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", state.user);
    formData.append("title", state.title);
    if (state.image) {
      formData.append("image", state.image);
    }
    if (state.imageURL) {
      formData.append("imageURL", state.imageURL);
    }
    formData.append("category", state.category);
    formData.append("color", state.color);
    action(formData, item._id)
      .then(res => history.push("/closet"));
  }

  const handleImageFile = (e) => {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setState({
        ["image"]: image,
        ["prevImgURL"]: fileReader.result
      });
    };
    if (image) {
      fileReader.readAsDataURL(image);
    }
  }

  
    const showHideClassName = show
      ? "new-item-modal-background display-block"
      : "new-item-modal-background display-none";

    return (
      <div className={showHideClassName}>
        <div className="close-icon" onClick={toggleNewFormModal}>CLOSE</div>
        <div className="modal-subcontainer">
          <div className="new-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-image">
                <img className="track-img-preview" src={state.prevImgURL}/>
                <input type="file" onChange={handleImageFile} />
              </div>
              <div className="form-fields">
                <label>Item Name: <br/>
                  <input
                    type="text"
                    value={state.title}
                    onChange={update("title")}
                  />
                </label>
                <select
                  onChange={update("category")}
                  value={state.category}
                >
                  <option>category</option>
                  <option value="coat">coat</option>
                  <option value="jacket">jacket</option>
                  <option value="blazer">blazer</option>
                  <option value="vest">vest</option>
                  <option value="dress">dress</option>
                  <option value="jumpsuit">jumpsuit</option>
                  <option value="shirt/blouse">shirt/blouse</option>
                  <option value="t-shirt">t-shirt</option>
                  <option value="tank top">tank top</option>
                  <option value="bodysuit">bodysuit</option>
                  <option value="sweatshirt">sweatshirt</option>
                  <option value="sweater">sweater</option>
                  <option value="cardigan">cardigan</option>
                  <option value="pants">pants</option>
                  <option value="jeans">jeans</option>
                  <option value="leggings">leggings</option>
                  <option value="shorts">shorts</option>
                  <option value="skirt">skirt</option>
                  <option value="shoes">shoes</option>
                  <option value="bag">bag</option>
                  <option value="accessory">accessory</option>
                  <option value="etc">etc</option>
                </select>

                <select onChange={update("color")} value={state.color}>
                  <option>color</option>
                  <option value="black">black</option>
                  <option value="grey">grey</option>
                  <option value="white">white</option>
                  <option value="beige">beige</option>
                  <option value="brown">brown</option>
                  <option value="metallic">metallic</option>
                  <option value="purple">purple</option>
                  <option value="blue">blue</option>
                  <option value="green">green</option>
                  <option value="yellow">yellow</option>
                  <option value="orange">orange</option>
                  <option value="pink">pink</option>
                  <option value="off-white">off-white</option>
                  <option value="red">red</option>
                  <option value="neon">neon</option>
                  <option value="etc">etc</option>
                </select>

                <input type="submit" value={formType} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default withRouter(ItemForm);
