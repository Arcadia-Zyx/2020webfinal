import React from "react";

export default class Page2 extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (<div>
            this is page2
            <br/>
            <a href="/p1">Link to p1</a>
        </div>);
    }
}
