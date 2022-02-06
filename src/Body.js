import './Body.css';

function Body(props){
    return (
      <div className="bodyContainer">
        <div className="bodyMain">
          <h1 className="title">{props.title}</h1>
          <p className="content"> {props.content}</p>
          {props.secondNeeded
            ? <img src={props.img} alt="" className="img"/>
            : <img src={props.img} alt="" className="img margin"/>}
        </div>
      </div>
    );
}

export default Body;