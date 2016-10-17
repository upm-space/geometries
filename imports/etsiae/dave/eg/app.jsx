import React, { Component } from 'react';


// App component - represents the whole app
export default class App extends Component {

    componentDidMount() {
        let dataset = [{x:150,radius:10},{x:150,radius:20},{x:150,radius:40},{x:150,radius:60},
            {x:150,radius:80},{x:150,radius:100},{x:150,radius:120}];

        let sampleSVG = d3.select("#canvas-svg")
            .append("svg")
            .attr("width", 500)
            .attr("height", 300);


        sampleSVG.selectAll("circle")
            .data(dataset)
            .enter().append("circle")
            .style("stroke", "gray")
            .style("fill", "none")
            .attr("r", function(d){return d.radius})
            .attr("cx", function(d){return d.x})
            .attr("cy", 120);

    }


    render() {
        return (
            <div id="canvas-svg"></div>
        );
    }
}