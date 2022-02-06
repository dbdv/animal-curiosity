import "./Form.css";

const text =
  "Feel free to send us a message with whatever you wanna say about the page.";

function Form() {
  return (
    <div className="contactContainer">
      <div className="formBody">
        <div className="formMain">
          <h1 className="title">{"Contact us!"}</h1>
          <p className="content"> {text}</p>
          <form className="form">
            <div className="inputs">
              <input type="text" className="input" placeholder="Mail" />
              <input type="text" className="input" placeholder="Subject" />
            </div>
            <div className="message">
              <textarea className="textArea" placeholder="Message" />
              <input type="submit" value="Submit" className="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
