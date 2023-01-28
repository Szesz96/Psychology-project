import React from 'react'
import '../help.css'



function FormHelp () {
    return (
        <>
        <div className="text-about-psych">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
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