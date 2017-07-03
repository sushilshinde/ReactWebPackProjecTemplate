import React from "react";

export class Header extends React.Component {
    render() { 
    	let title = "This is Header";   	
        return (         
        	<div><h1>{this.props.title}</h1>
        		<div>
        			<ul>
        				{this.props.list.map((item,i) => <li key={i}>{item}</li>)}
        			</ul>
        		</div>
        		<div>
        			{this.props.children}
        		</div>

        	</div>
        );
    }
}
