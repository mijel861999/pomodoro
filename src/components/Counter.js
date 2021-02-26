// React
import React from 'react';

// CSS components
import { LinkText } from './StyledComponents';

//CSS
import './styles/Counter.css';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time : {
                m : 0,
                s : 0,
            },
            seconds: 1500,
            on: false
        };

        this.timer = 0;
        
        this.buttonStart=React.createRef();
        this.buttonPause=React.createRef();
        this.buttonAgain=React.createRef();

        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.setCeroTimer = this.setCeroTimer.bind(this);
        this.changueButton =this.changueButton.bind(this);
        this.again = this.again.bind(this);
    }

    secondsToTime(secs){
        let hours=Math.floor(secs/(60*60));
        
        let divisor_for_minutes=secs%(60*60);
        let minutes=Math.floor(divisor_for_minutes/60);
        
        let divisors_for_seconds=divisor_for_minutes%60;
        let seconds=Math.ceil(divisors_for_seconds);

        let obj={
            "h":hours,
            "m":minutes,
            "s": seconds
        };

        return obj;
    }


    componentDidMount(){
        // let timeLeftVar=this.secondsToTime(this.state.seconds);
        
        // this.setState({
        //     time:timeLeftVar
        // });
        this.again();

        const buttonPause =this.buttonPause.current;

        buttonPause.style.display="none";
    }



    startTimer(){
        if(this.timer == 0 && this.state.seconds > 0){
            
            this.setState({
                on:true
            })
            
            this.changueButton();
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown(){
        let auxSeconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(auxSeconds),
            seconds: auxSeconds
        });
        
        if(this.state.seconds == 0){
            clearInterval(this.timer);
            alert("Acaba de terminar");
            this.changueButton();
        }
    }
    
    pauseTimer(){
        clearInterval(this.timer);
        this.timer = 0;
        this.setState({
            on: false
        });
        // this.changueButton();
    }

    setCeroTimer(){
        this.setState({
            time :{
                m :0,
                s: 0,
            },
            seconds: 0
        })
    }

    changueButton(){
        const buttonPause =this.buttonPause.current;
        const buttonStart =this.buttonStart.current;
        

        if(this.state.on==true){
            buttonStart.style.display="block";
            buttonPause.style.display="none";
        }else{
            buttonStart.style.display="none";
            buttonPause.style.display="block";
        }
    }
    
    again(){
        
        let timeLeftVar=this.secondsToTime(this.state.seconds);
        
        this.setState({
            time:{
                m: 25,
                s: 0
            },
            seconds: 1500
        });  
        console.log("HOla")
    }

    render(){
        return(
            <React.Fragment>
                <section className="counter-section">
                    <section className="counter">
                        <h1>{this.state.time.m}:{this.state.time.s}</h1>
                    </section>
                    <section className="buttons-container">
                        <LinkText ref={this.buttonStart} onClick={()=>{
                            this.startTimer();
                        }} primary>
                            Empezar
                        </LinkText>
                        <LinkText ref={this.buttonPause} onClick={()=>{
                            this.pauseTimer();
                            this.changueButton();
                        }} primary>
                            Pausa
                        </LinkText>
                        <LinkText ref={this.buttonAgain} onClick={this.again} primary>
                            De nuevo
                        </LinkText>
                    </section>
                </section>

            </React.Fragment>
        );
    }
}

export default Counter;