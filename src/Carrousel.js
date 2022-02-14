import "./Carrousel.css";
import images from "./images/images";
import React from "react";

export default function Carrousel() {
  const [idSelected, setIdSelected] = React.useState(0);
  let key = 0;

  const imagesToRender = images.map((img) => (
    <img
      src={img}
      alt=""
      key={key}
      id={key}
      name="image"
      className={key == idSelected ? "galleryImg selected" : "galleryImg"}
      onClick={(e) => {
        handleClick(e.target.id);
      }}
      value={key++}
    />
  ));

  function handleClick(id) {
    if (id !== idSelected) setIdSelected(id);
  }

  function handleClickLeft() {
    setIdSelected((prevId) => (idSelected == 0 ? 6 : prevId - 1));
  }

  function handleClickRight() {
    setIdSelected((prevId) => (idSelected == 6 ? 0 : ++prevId));
  }

  return (
    <div className="outer">
      <div className="inner">
        <div className="bigImageDiv" id="bigImageDiv">
          <img
            src={images[idSelected]}
            alt=""
            className="bigImage"
            id="bigImage"
          />
        </div>

        <form className="preview">
          <div>
            <i
              className="fas fa-chevron-circle-left arrow"
              onClick={handleClickLeft}
            />
          </div>
          <div className="preImages">{imagesToRender}</div>
          <div>
            <i
              className="fas fa-chevron-circle-right arrow"
              onClick={handleClickRight}
            />
          </div>
        </form>
      </div>
    </div>
  );
}