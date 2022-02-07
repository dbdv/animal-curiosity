import "./Carrousel.css";
import images from "./images/images";
import React from "react";

class Carrousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      oldValue: 0,
      id: 0,
      images,
    };
  }


  componentDidMount() {
    document.getElementById("0").classList.add("selected");
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
                onClick={() => {}}
              ></i>
            </div>
            <div className="preImages">
              {this.state.images.map((img) => {
                
                return (
                  <img
                    src={img}
                    alt=""
                    key={this.state.id}
                    id={this.state.id}
                    name="image"
                    value={this.state.id}
                    className="galleryImg"
                  />
                );
              })}
            </div>
            <div>
              <i
                className="fas fa-chevron-circle-right arrow"
                onClick={() => {}}
              ></i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

/* 
function Carrousel(){

    let id = 0;
    const[value, setValue] = useState(0);
    const[oldValue, setOld] = useState(0);

    useEffect(()=>{
            document.getElementById("0").classList.add("selected");
        }, []) 
            

    return (
      <div className="outer">
        <div className="inner">
            <div className='bigImageDiv' id='bigImageDiv'>
                <img src={images[0]} alt='' className='bigImage' id='bigImage'/>
            </div>

            <form className='preview'>
                <div>
                <i className="fas fa-chevron-circle-left arrow" onClick={moveLeft}></i>
                </div>
                <div className='preImages'>
                {images.map((img) => {
                        return <img 
                                    src={img} 
                                    alt="" 
                                    key={id}
                                    id={id}
                                    name="image"
                                    value = {id++}
                                    className="galleryImg"
                                    />})
                }
                </div>
                <div>
                    <i className="fas fa-chevron-circle-right arrow" onClick={moveRight}></i>
                </div>
            </form>   
        </div>


      </div>
    );


    function selectImage(newValue, oldVal){

        setValue(newValue);
        setOld(oldVal);

        const div = document.getElementById("bigImageDiv");

        const oldImage = document.getElementById("bigImage");
        const newImage = document.createElement("img");

        const oldMniature = document.getElementById(""+oldValue);
        const newMiniature = document.getElementById(""+value);
        

        newImage.src = images[value];
        newImage.alt = "";
        newImage.className = "bigImage effect";
        newImage.id = 'bigImage';

        if(newMiniature != null) 
             newMiniature.classList.toggle("selected")
        if(oldMniature != null)
             oldMniature.classList.toggle("selected");
        div.replaceChild(newImage, oldImage);
    }

    function moveLeft (){
        value > 0
         ? selectImage(value - 1, value)
         : selectImage(6, 0);
    }
    
    function moveRight(){
        value < 6
         ? selectImage(value + 1, value)
         : selectImage(0, 6);
    }
    
} */

export default Carrousel;
