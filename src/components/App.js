import React, { useState } from "react"
import "../styles/base.css"
import validator from "validator"
import { BrowserRouter as Router, Route, link } from "react-router-dom"
import sub from "../components/Submitted"
import { Link } from "react-router-dom"
function App(props) {
  const [ime, setIme] = useState("")
  const [imeError, setImeError] = useState("")
  const [imejl, setImejl] = useState("")
  const [imejlError, setImejlError] = useState("")
  const [korisnik, setKorisnik] = useState("")
  const [korisnikError, setKorisnikError] = useState("")
  const [sifra, setSifra] = useState("")
  const [sifraError, setSifraError] = useState("")
  const [confirm, setConfirm] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const [web, setWeb] = useState("")
  const [webError, setWebError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    let err = false

    if (ime !== "") {
      if (!validator.isAlpha(ime)) {
        err = true
        setImeError("Must be a valid text")
      } else {
        setImeError("")
      }
    } else {
      err = true
      setImeError("Cannot be blank")
    }

    if (imejl !== "") {
      if (!validator.isEmail(imejl)) {
        err = true
        setImejlError("Must be a valid email")
      } else {
        setImejlError("")
      }
    } else {
      err = true
      setImejlError("Cannot be blank")
    }

    if (korisnik === "") {
      err = true
      setKorisnikError("Cannot be blank")
    } else {
      setKorisnikError("")
    }

    if (sifra === "") {
      err = true
      setSifraError("Cannot be blank")
    } else {
      setSifraError("")
    }

    if (confirm !== "") {
      if (confirm !== sifra) {
        setConfirmError("Must match the password")
      }
    } else {
      setConfirmError("Cannot be blank")
    }

    if (web !== "") {
      if (!validator.isUrl(web)) {
        err = true
        setWebError("Must be a valid url")
      } else {
        setWebError("")
      }
    } else {
      err = true
      setWebError("Cannot be blank")

      if (!err) {
        console.log("submitted")
      } else {
        console.log("not submitted")
      }
    }
  }
  return (
    <Router>
      <div className="main">
        <div className="profile">Profile Form - All field required</div>
        <form onSubmit={handleSubmit} className="inputs">
          <label className="error">Name {imeError}</label>
          <input
            className={imeError === "" ? "" : "error"}
            onChange={element => setIme(element.target.value)}
            value={ime}
            type="text"
            placeholder="Danilo"
          ></input>
          <p></p>
          <label>Email {imejlError}</label>
          <input
            className={imejlError === "" ? "" : "error"}
            onChange={element => setImejl(element.target.value)}
            value={imejl}
            type="email"
            placeholder="email@test.com"
          />
          <p></p>
          <label>Username {korisnikError}</label>
          <input
            className={korisnikError === "" ? "" : "error"}
            onChange={element => setKorisnik(element.target.value)}
            value={korisnik}
            type="text"
            placeholder="myusername"
          ></input>
          <p></p>
          <label>Password {sifraError}</label>
          <input
            className={sifraError === "" ? "" : "error"}
            onChange={element => setSifra(element.target.value)}
            value={sifra}
            type="password"
            placeholder="...."
          ></input>
          <p></p>
          <label>Confirm Password {confirmError}</label>
          <input
            className={confirmError === "" ? "" : "error"}
            onChange={element => setConfirm(element.target.value)}
            value={confirm}
            type="password"
            placeholder="...."
          ></input>
          <p></p>
          <label>Website {webError}</label>
          <input
            className={webError === "" ? "" : "error"}
            onChange={element => setWeb(element.target.value)}
            value={web}
            type="url"
            placeholder="Website - Please enter a valid url"
          ></input>
          <p></p>
          <button className="button" type="submit" placeholder="Submit">
            Submit
          </button>
          <Link to="/sub">ddd</Link>
        </form>
      </div>
      <Route exact path="/" component={sub} />
      <Route path="/Submitted" component={sub} />
    </Router>
  )
}

export default App
