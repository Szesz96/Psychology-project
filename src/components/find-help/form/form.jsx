import React from 'react'
import '../help.css'


function FormHelp () {
    return (
        <>
        <div className="form-container-help">
          <form className="form">
            <div>
              <label>Imię:</label>
              <input type="text" className="form-input"></input>
            </div>
            <div>
              <label>Nazwisko:</label>
              <input type="text" className="form-input"></input>
            </div>
            <div>
              <label>E-mail:</label>
              <input type="text" className="form-input"></input>
            </div>
            <div>
              <label>Telefon:</label>
              <input type="text" className="form-input"></input>
            </div>
            <div>
              <label>Twoja wiadomość:</label>
              <textarea></textarea>
            </div>
            <button>Wyślij</button>
          </form>
        </div>
        </>
    );
}

export default FormHelp;