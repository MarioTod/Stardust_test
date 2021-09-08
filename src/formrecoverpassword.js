import axios from 'axios';
import React from 'react';

export default class FormRecoverPassword extends React.Component {

    state = {
        email: " ",
        flag: false // nel caso qualche dato non venga inserito correttamente
    }

    render() {

        return (
            <div className="container was-validated col-sm-8 mt-3 p-3  "
                style={
                    {
                        border: "2px solid #2bc47dd0",
                        borderRadius: "20px",
                        background: "#EFEFEF"
                    }
                }>
                <p >Inserire email per il recupero</p>

                <div className="form-group">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" className="form-control" length="15" maxlength="40" style={{ width: "350px" }} required
                        onChange={
                            changeEvent => {
                                this.setState({
                                    ...this.state,
                                    email: changeEvent.target.value.toLowerCase()
                                })
                            }
                        } />
                    <div className="invalid-feedback">
                        Campo obbligatorio
                    </div>
                    <button name="ok" id="ok" type="submit" className="btn btn-primary mt-3"
                        onClick={clickEvent => {
                            axios.post("http://localhost:5000/users/recoverPassword", this.state)
                                .then(result => {
                                    
                                        alert('Una password temporanea è stata inviata alla email inserita!');
                                        document.location.href = "/login"
                                    
                                }).catch(error => {
                                    alert('Si è verificato un errore imprevisto:' + error);
                                })
                        }}>Recupera password</button>
                </div>
            </div >
        )
    }
}