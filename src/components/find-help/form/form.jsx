import React from 'react'
import '../help.css'



function FormHelp () {
    return (
        <>
        <form action="" className="form-help">
          <div className="form-container-help">
            <div className="form-head">
            <h3 className="form-header">Napisz do nas:</h3>
            </div>
            <div className="form-input">
              <label for="name">Imię:</label>
              <input type="text" name="name" id="name" ></input>
            </div>
            <div className="form-input">
              <label for="surname">Nazwisko:</label>
              <input type="text" name="surname" id="surname"></input>
            </div>
            <div className="form-input">
              <label for="email">E-mail:</label>
              <input type="email" name="email" id="email"></input>
            </div>
            <div className="form-input">
              <label>Telefon:</label>
              <input type="tel" name="tel" id="tel"></input>
            </div>
            <div className="form-input">
              <label for="message">Twoja wiadomość:</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="submit-button">WYŚLIJ</button>
            </div>
          </form>
        
        </>
    );
}

export default FormHelp;