import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
/*
React with TypeScript
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

*/
class App extends React.Component {
	
    render() {
    	let a = [1,2,3,4,5];
    	console.log("Calling rendre");
        return ( 
        	<div className="container">
	        	<div className="col-xs-10">
	        		<Header title={"THis is passed prop"} list={a}>	        	
						<p>This is para from Parent</p>
	        		</Header>
	        	</div>  
	        	<div className="col-xs-10">
	        		<Home>	 
	        				<p>This is para fom </p>
	        		</Home>       	
	        	</div>  
        	</div>

        );
    }
}
render(<App/>,window.document.getElementById("app"))