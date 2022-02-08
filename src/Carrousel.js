import "./Carrousel.css";
import images from "./images/images";
import React from "react";

class Carrousel extends React.Component {
  state = {
    value: 0,
    oldValue: 0,
    id: 0,
  };
  setState = {
    value: 0,
    oldValue: 0,
    id: 0,
  };

  handleClick = (newValue, oldVal) => {

    this.state.value = newValue;
    this.state.oldValue = oldVal; 

    const div = document.querySelector(".bigImageDiv");

    const oldImage = document.getElementById("bigImage");
    const newImage = document.createElement("img");

    const oldMniature = document.getElementById("" + this.state.oldValue);
    const newMiniature = document.getElementById("" + this.state.value);

    newImage.src = images[this.state.value];
    newImage.alt = "";
    newImage.className = "bigImage effect";
    newImage.id = "bigImage";
    newImage.value = this.state.value;

    if (newMiniature != null) newMiniature.classList.toggle("selected");
    if (oldMniature != null) oldMniature.classList.toggle("selected");
    div.replaceChild(newImage, oldImage);
  };

  handleClickLeft = () => {
    this.state.value > 0
      ? this.handleClick(this.state.value - 1, this.state.value)
      : this.handleClick(6, 0);
  };

  handleClickRight = () => {
    this.state.value < 6
      ? this.handleClick(this.state.value + 1, this.state.value)
      : this.handleClick(0, 6);
  };

  clicked = (v) => {
      if(v.target != null){
        console.log(v.target.id);
        if(v.target !== undefined){
            const valueSelected = document.getElementById("bigImage").value;
            this.handleClick(v.target.id, valueSelected === undefined ? 0 : valueSelected);
            console.log(this.state.value, valueSelected === undefined ? 0 : valueSelected)
        }}
  };

  componentDidMount() {
    document.querySelector(".galleryImg").classList.add("selected");
    const previews = document.querySelectorAll(".galleryImg");

    previews.forEach((img) => {
      if (img != null) {
        const v = img.getAttribute("value");
        /* console.log(img.getAttribute("value")) */
        img.addEventListener("onClick", this.clicked(v));
      } 
    });
  }

  render() {
    return (
      <div className="outer">
        <div className="inner">
          <div className="bigImageDiv" id="bigImageDiv">
            <img src={images[0]} alt="" className="bigImage" id="bigImage" />
          </div>

          <form className="preview">
            <div>
              <i
                className="fas fa-chevron-circle-left arrow"
                onClick={this.handleClickLeft}
              ></i>
            </div>
            <div className="preImages">
              {images.map((img) => {
                return (
                  <img
                    src={img}
                    alt=""
                    key={this.state.id}
                    id={this.state.id}
                    name="image"
                    onClick={this.clicked}
                    value={this.state.id++}
                    className="galleryImg"
                  />
                );
              })}
            </div>
            <div>
              <i
                className="fas fa-chevron-circle-right arrow"
                onClick={this.handleClickRight}
              ></i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Carrousel;
