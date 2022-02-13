import "./Carrousel.css";
import images from "./images/images";
import React from "react";

export default function Carrousel() {
  const [idSelected, setIdSelected] = React.useState(0);
  let key = 0;

  React.useEffect(() => {
    console.log(idSelected)
    const img = document.getElementById(idSelected);
    img.classList.add("selected");
  });

  function handleClick(id) {
    changeSelected(id);
    setIdSelected(id);
  }

  function handleClickLeft() {
    idSelected == 0 ? handleClick(6) : handleClick(idSelected - 1);
  }

  function handleClickRight() {
    idSelected == 6 ? handleClick(0) : handleClick(idSelected + 1);
  }

  function changeSelected(id) {
    const previousSeleted = document.querySelector(".selected");
    const nowSelected = document.getElementById(id);

    previousSeleted.classList.remove("selected");
    if (nowSelected !== null) nowSelected.classList.add("selected");
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
            ></i>
          </div>
          <div className="preImages">
            {images.map((img) => {
              return (
                <img
                  src={img}
                  alt=""
                  key={key}
                  id={key}
                  name="image"
                  onClick={(e) => {
                    handleClick(e.target.id);
                  }}
                  value={key++}
                  className="galleryImg"
                />
              );
            })}
          </div>
          <div>
            <i
              className="fas fa-chevron-circle-right arrow"
              onClick={handleClickRight}
            ></i>
          </div>
        </form>
      </div>
    </div>
  );
}
