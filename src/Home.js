import React, {Component} from 'react';
import { Card, Button} from 'react-bootstrap';
import auto1 from "./assets/auto1.png"
import moto1 from "./assets/moto1.png"
import bici1 from "./assets/bici1.png"
import monopattino1 from "./assets/monopattino1.png"

export class Home extends Component{

    render(){
        
        return(
        
            <div className="container text-center justify-content-center">
                <h1>Cos'è Stardust?</h1>

                <br/><br/>

                <Card body style={{backgroundColor:'#eeeeee'}}> <br/><strong>Stardust</strong> è un servizio di sharing,
                    intelligente, economico e rispettoso dell’ambiente.<br/>
                    Con pochi e semplici passaggi potrai prenotare il mezzo più adatto alle tue esigenze 
                    scegliendo tra un'ampia gamma di veicoli: <br/>Auto, Bici, Monopattini e Motorini.
                    <br/> <br/>
                </Card>
                <br/><br/><br/>

                
                    <div style={{display:"flex"}}>
                        <Card  sm={3} style={{ width: '50%',height:'100%', alignItems:'center', marginLeft:'10px', backgroundColor:'#eeeeee'}}><br/>
                            <Card.Img  variant="top" src={auto1} style={{ width:'30%', height:'60%', marginLeft:'10px'}}/> 
                            <Card.Body>
                                <Card.Title>Automobili</Card.Title>
                                <Card.Text>
                                Le migliori auto per muoversi in città, semplici e convenienti da prenotare!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card  sm={3} style={{ width: '50%',height:'40%', alignItems:'center', marginLeft:'10px', backgroundColor:'#eeeeee'}}><br/>
                            <Card.Img  variant="top" src={moto1} style={{ width:'30%', height:'40%', marginLeft:'10px', backgroundColor:'#eeeeee'}}/>
                            <Card.Body>
                                <Card.Title>Motorini</Card.Title>
                                <Card.Text>
                                Usa i nostri motorini per spostarti velocemente <br/>in mezzo al traffico urbano!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>

                    <br/><br/>
                        <div style={{display:"flex"}}>
                        <Card style={{ width: '50%',height:'40%', alignItems:'center', marginLeft:'10px', backgroundColor:'#eeeeee'}}>
                            <Card.Img  variant="top" src={bici1} style={{ width:'30%', height:'40%', marginLeft:'10px'}}/>
                            <Card.Body>
                                <Card.Title>Biciclette</Card.Title>
                                <Card.Text>
                                Noleggia le nostre bici per un rilassante giro al parco o per una pedalata!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card  sm={3} style={{ width: '50%',height:'45%', alignItems:'center', marginLeft:'10px', backgroundColor:'#eeeeee'}}><br/>
                            <Card.Img  variant="top" src={monopattino1} style={{ width:'30%', height:'40%', marginLeft:'10px'}}/>
                            <Card.Body>
                                <Card.Title>Monopattini</Card.Title>
                                <Card.Text>
                                    Il meglio dei monopattini elettrici, per spostarsi velocemente e con agilità!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    

                <br/><br/>
                <p> <strong>Scopri di più sui nostri servizi!</strong></p>
                <Button variant="outline-secondary" href="/tariffe"><strong>Vai alle tariffe</strong></Button>

                <br/><br/><br/><br/>

        
            </div>
        )
     }
    
}
