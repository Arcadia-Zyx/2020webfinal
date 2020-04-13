import React from "react";

export default class Page1 extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (<div>
            this is page1
            <br/>
            <a href="/p2">Link to p2</a>
        </div>);
    }
}

