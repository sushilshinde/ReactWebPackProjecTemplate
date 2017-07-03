import React from "react";

export class Home extends React.Component {
 

    constructor(props){
        super();
        console.log("In constructor");
    }

    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    
    componentWillReceiveProps(nP){
        console.log("componentWillRecieveProps")
        console.log(nP)
    }
    compoenentShoudUpdate(nP,nS){
        console.log("compoenentShoudUpdate")
        console.log(nP)
        console.log(nS)
        return true;
    }

    componentWillUpdate(nP,nS){
        console.log("componentWillUpdate")
        console.log(nP)
        console.log(nS)
    }

    componentDidUpdate(nP,nS){
        console.log("componentDidUpdate")
        console.log(nP)
        console.log(nS)
    }
    
    componentWillUnmont(){
        console.log("componentWillUnmont")        
    }

    render() { 
    	let title = "This is home";   	
        return (         
        	<div><h1>{title}</h1></div>
        );
    }
}
