import React, {Component} from "react";
import { Button, Form, Col} from 'react-bootstrap';
import axios from "axios";
import Cookie from "universal-cookie";
import 'react-datepicker/dist/react-datepicker.css';
import './datapicker.css';
import { DatePickerComponent, TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { formatRFC3339WithOptions } from "date-fns/fp";

export default class SegnalaRitardo extends Component{

    state={
        object:{},

        id_client:"",
        email:"",
        motivation:"ritardo",
        end_date:"",
        end_time:"",
        end_address:"",
        code_prenotation: this.props.location.state.code_prenotation,
        id_ride:this.props.location.state.id_ride
    }

    componentDidMount(){
        const cookie = new Cookie();
        this.setState({
            ...this.state.id_client=cookie.get("cookieUserid"),
            ...this.state.email=cookie.get("cookieEmail")
        })


        axios.post("http://localhost:3000/Client/Segnalazione_pren", this.state).
            then(result => {
                this.setState({
                    ...this.state,
                    object: result.data
                })
                console.log(this.state.object)
            }).catch(error => {
                console.log(error);
                alert('Si è verificato un errore imprevisto:' + error);
            })

    }



    minOrario(dataSelezionata){

        let dataFinale = new Date(this.state.object.end_date)

        if(dataSelezionata>dataFinale){
            return 0;
        }else{
            dataFinale.setMinutes(dataFinale.getMinutes() + 30)
            return dataFinale
        }
    }

    render(){
        const now = new Date();

        return(
            <div align="center">
                <h3>Effettua una segnalazione per un ritardo</h3> <br/>

                <br/><br/><br/>

                <h5>Inserisci i dati del tuo nuovo arrivo. <br/> Verrà calcolata una mora in base alla differenza tra il nuovo orario e quello precedentemente inserito</h5>
                
                <br/><br/><br/>
                
                <Form>

                    <Form.Group as={Col} controlId="formGridStartAddress">
                            <Form.Label>Inserisci l'indirizzo di arrivo</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                maxlength="40"
                                onChange={ changeEvent => {
                                    this.setState({
                                        ...this.state,
                                        end_address: changeEvent.target.value
                                    })
                                }} required
                            />
                    </Form.Group>

                    <br/><br/>

                    <DatePickerComponent
                        onChange={changeEvent => {
                            if(changeEvent.target.value != null){
                                this.setState({
                                    ...this.state,
                                    end_date: changeEvent.target.value
                                })
                            }else{
                                this.setState({
                                    ...this.state,
                                    end_date: null                                        
                                })
                                            
                            }
                        }}
                        format="dd-MM-yy"
                        required
                        min={this.state.object.end_date}
                        placeholder="inserisci data"
                        >
                        </DatePickerComponent>

                        <br/><br/><br/><br/>

                        <TimePickerComponent
                            placeholder="Inserisci orario"
                            min={this.minOrario(this.state.end_date)}
                            onChange={changeEvent => {
                                if(changeEvent.target.value != null){
                                    this.setState({
                                        ...this.state,
                                        end_time: changeEvent.target.value.toLocaleTimeString("it-IT")
                                    })

                                }else{

                                    this.setState({
                                        ...this.state,
                                        end_time: null
                                        
                                    })

                                }
                            }}
                            required>

                        </TimePickerComponent>

                </Form>
                <br/>
                <Button 
                    onClick={clickEvent => {
                        clickEvent.preventDefault();
                        axios.post("http://localhost:3000/Client/Segnalazione", this.state).
                            then(result => {
                            alert("Il ritardo è stato segnalato")
                            document.location.href = '/';
                                    
                            }).catch(error => {
                                console.log(error);
                                alert('Si è verificato un errore imprevisto:' + error);
                            })
                    }}
                >Invia Segnalazione</Button>
                <br/><br/>
            </div>
        );
    }

}