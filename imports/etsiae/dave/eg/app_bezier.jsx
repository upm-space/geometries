import React, { Component } from 'react';
import Point from './geometry/point.js';
import Curve from  './calcs/curves.js';

// App component - represents the whole app
export default class App extends Component {

    constructor(props){
        super(props);
        this.p0 = new Point(100, 400, 0);
        this.p1 = new Point(300, 200, 0);
        this.p2 = new Point(400, 400, 0);
        this.p3 = new Point(500, 200, 0);
        this.p4 = new Point(700, 400, 0);
    }

    componentDidMount() {

        let controlPoints = [this.p0.toJson2D(), this.p1.toJson2D(), this.p2.toJson2D(),this.p3.toJson2D(),this.p4.toJson2D()];

        this.canvasSVG = d3.select("#canvas-svg")
            .append("svg")
            .attr("width", 750)
            .attr("height", 600);

        this.controlPoints = this.canvasSVG.selectAll("circle")
            .data(controlPoints)
            .enter().append("circle")
            .style("stroke", "gray")
            .style("fill", "red")
            .attr("r", 5)
            .attr("cx", function(d){return d.x})
            .attr("cy", function(d){return d.y})
            .attr("id", function(d){return d.id});

        let curve = new Curve();
        // console.log(curve.sFact(0));
        // console.log(curve.sBin(2,1));
        let QPoints = curve.toD3Bezier([this.p0,this.p1,this.p2,this.p3,this.p4],0.001);

        this.canvasSVG.selectAll("circle")
            .data(QPoints)
            .enter().append("circle")
            .style("fill", "blue")
            .attr("r", 0.5)
            .attr("cx", function(d){return d.x})
            .attr("cy", function(d){return d.y});
    }

    render() {
        return (
            <div id="canvas-svg"></div>
        );
    }
}