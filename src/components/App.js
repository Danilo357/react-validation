import React, { useState } from "react";
import "../styles/base.css";
import validator from "validator";
import { BrowserRouter as Router, Route, link } from "react-router-dom";
import sub from "../components/Submitted";
import { Link } from "react-router-dom";

function App(props) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [buttonError, setButtonError] = useState("");
  // const { sendF } = useUsers();

  function handleSubmit(e) {
    e.preventDefault();
    let err = false;

    if (name !== "") {
      if (
        !validator.isAlpha(name) &&
        validator.isEmpty(name, { ignore_whitespace: true })
      ) {
        err = true;
        setNameError("Must be a valid text");
      } else {
        setNameError("");
      }
    } else {
      err = true;
      setNameError("required");
    }

    if (email !== "") {
      if (!validator.isEmail(email)) {
        err = true;
        setEmailError("Must be a valid email");
      } else {
        setEmailError("");
      }
    } else {
      err = true;
      setEmailError("required");
    }

    if (message === "") {
      err = true;
      setMessageError("required");
    } else {
      setMessageError("");
    }

    if (!err) {
      setButtonError("Thank you for you Feedback.");
    } else {
      setButtonError("Please complete required fields");
    }
    if (!err) {
      // sendF(message, email, name);
      setName("");
      setEmail("");
      setMessage("");
    } else {
    }
  }
  return (
    <div className="mainForm">
      <form onSubmit={handleSubmit} className="contactInputs">
        <div className="contactForm"> We'd love to hear from you!</div>
        <div className="contactTop">
          <div className="contactTopLeft">
            <div className="nameTop">
              <div className="nameField">Name </div>
              <span className="nameFieldError">{nameError}</span>
            </div>
            <input
              className={nameError === "" ? "nameInputField" : "nameInputField"}
              onChange={element => setName(element.target.value)}
              value={name}
              type="text"
              placeholder=""
            />
          </div>
          <div className="contactTopRight">
            <div className="emailTop">
              <div className="emailField">Email </div>
              <span className="emailFieldError">{emailError}</span>
            </div>
            <input
              className={
                emailError === "" ? "emailInputField" : "emailInputField"
              }
              onChange={element => setEmail(element.target.value)}
              value={email}
              type=""
              placeholder=""
            />
          </div>
        </div>
        <div className="messageContainer">
          <div className="messageTop">
            <div className="messageText">Message</div>
            <div className="messageFieldError">{messageError}</div>
          </div>
          <textarea
            className={
              messageError === "" ? "messageInputField" : "messageInputField"
            }
            onChange={element => setMessage(element.target.value)}
            value={message}
            type="text"
            placeholder=""
          ></textarea>
        </div>
        <button className="mainButton" type="submit" placeholder="Submit">
          Submit
        </button>
        <p className="contactConfirmation">{buttonError}</p>
      </form>
      <div className="contactPicRight">
        {/* <div id="myVideoContainer">
          <video autoPlay={true} loop={true} id="myVideo" src={dancing}></video>
        </div> */}
      </div>
    </div>
  );
  // const [ime, setIme] = useState("");
  // const [imeError, setImeError] = useState("");
  // const [imejl, setImejl] = useState("");
  // const [imejlError, setImejlError] = useState("");
  // const [korisnik, setKorisnik] = useState("");
  // const [korisnikError, setKorisnikError] = useState("");
  // const [sifra, setSifra] = useState("");
  // const [sifraError, setSifraError] = useState("");
  // const [confirm, setConfirm] = useState("");
  // const [confirmError, setConfirmError] = useState("");
  // const [web, setWeb] = useState("");
  // const [webError, setWebError] = useState("");
  // const [buttonError, setButtonError] = useState("");
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   let err = false;
  //   if (ime !== "") {
  //     if (!validator.isAlpha(ime)) {
  //       err = true;
  //       setImeError("Must be a valid text");
  //     } else {
  //       setImeError("");
  //     }
  //   } else {
  //     err = true;
  //     setImeError("Cannot be blank");
  //   }
  //   if (imejl !== "") {
  //     if (!validator.isEmail(imejl)) {
  //       err = true;
  //       setImejlError("Must be a valid email");
  //     } else {
  //       setImejlError("");
  //     }
  //   } else {
  //     err = true;
  //     setImejlError("Cannot be blank");
  //   }
  //   if (korisnik === "") {
  //     err = true;
  //     setKorisnikError("Cannot be blank");
  //   } else {
  //     setKorisnikError("");
  //   }
  //   if (sifra === "") {
  //     err = true;
  //     setSifraError("Cannot be blank");
  //   } else {
  //     setSifraError("");
  //   }
  //   if (confirm !== "") {
  //     if (confirm !== sifra) {
  //       setConfirmError("Must match the password");
  //     }
  //   } else {
  //     setConfirmError("Cannot be blank");
  //   }
  //   if (web !== "") {
  //     if (!validator.isURL(web)) {
  //       err = true;
  //       setWebError("Must be a valid url");
  //     } else {
  //       setWebError("");
  //     }
  //   } else {
  //     err = true;
  //     setWebError("Cannot be blank");
  //     if (!err) {
  //       props.history.push("/Submitted");
  //     } else {
  //     }
  //     if (!err) {
  //       setButtonError("Thank you for you Feedback.");
  //     } else {
  //     }
  //     if (!err) {
  //       setIme("");
  //       setImejl("");
  //       setKorisnik("");
  //     } else {
  //     }
  //   }
  // }
  // return (
  //   <Router>
  //     <div className="main">
  //       <div className="profile">Profile Form - All field required</div>
  //       <form onSubmit={handleSubmit} className="inputs">
  //         <label className="nerror">Name {imeError}</label>
  //         <input
  //           className={imeError === "" ? "" : "error"}
  //           onChange={element => setIme(element.target.value)}
  //           value={ime}
  //           type="text"
  //           placeholder="Danilo"
  //         ></input>
  //         <p></p>
  //         <label>Email {imejlError}</label>
  //         <input
  //           className={imejlError === "" ? "" : "error"}
  //           onChange={element => setImejl(element.target.value)}
  //           value={imejl}
  //           type="email"
  //           placeholder="email@test.com"
  //         />
  //         <p></p>
  //         <label>Username {korisnikError}</label>
  //         <input
  //           className={korisnikError === "" ? "" : "error"}
  //           onChange={element => setKorisnik(element.target.value)}
  //           value={korisnik}
  //           type="text"
  //           placeholder="myusername"
  //         ></input>
  //         <p></p>
  //         <label>Password {sifraError}</label>
  //         <input
  //           className={sifraError === "" ? "" : "error"}
  //           onChange={element => setSifra(element.target.value)}
  //           value={sifra}
  //           type="password"
  //           placeholder="...."
  //         ></input>
  //         <p></p>
  //         <label>Confirm Password {confirmError}</label>
  //         <input
  //           className={confirmError === "" ? "" : "error"}
  //           onChange={element => setConfirm(element.target.value)}
  //           value={confirm}
  //           type="password"
  //           placeholder="...."
  //         ></input>
  //         <p></p>
  //         <label>Website {webError}</label>
  //         <input
  //           className={webError === "" ? "" : "error"}
  //           onChange={element => setWeb(element.target.value)}
  //           value={web}
  //           type="url"
  //           placeholder="Website - Please enter a valid url"
  //         ></input>
  //         <p></p>
  //         <button className="button" type="submit" placeholder="Submit">
  //           Submit
  //         </button>
  //         <Link className="bum" to="/sub"></Link>
  //       </form>
  //     </div>
  //     <Route exact path="/" component={sub} />
  //     <Route path="/Submitted" component={sub} />
  //   </Router>
  // );
}

export default App;
