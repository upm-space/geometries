import React, { Component } from 'react';


// App component - represents the whole app
export default class SplineEditor extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {

        this.width = 960;
        this.height = 500;

        this.points = d3.range(1, 5).map(function(i) {
            return [i * this.width / 5, 50 + Math.random() * (this.height - 100)];
        });

        this.dragged = null;
        this.selected = this.points[0];

        this.line = d3.svg.line();

        this.svg = d3.select("body").append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .attr("tabindex", 1);

        this.svg.append("rect")
            .attr("width", this.width)
            .attr("height", this.height)
            .on("mousedown", this.mousedown);

        this.svg.append("path")
            .datum(this.points)
            .attr("class", "line")
            .call(this.redraw(this));

        d3.select(window)
            .on("mousemove", this.mousemove)
            .on("mouseup", this.mouseup)
            .on("keydown", this.keydown);

        d3.select("#interpolate")
            .on("change", this.changeOption)
            .selectAll("option")
            .data([
                "linear",
                "step-before",
                "step-after",
                "basis",
                "basis-open",
                "basis-closed",
                "cardinal",
                "cardinal-open",
                "cardinal-closed",
                "monotone"
            ])
            .enter().append("option")
            .attr("value", function(d) { return d; })
            .text(function(d) { return d; });

        this.svg.node().focus();




    }

    redraw(svg){
        if(svg) this.svg = svg;
        this.svg.select("path").attr("d", this.line);

        this.circle = this.svg.selectAll("circle")
            .data(points, function(d) { return d; });

        this.circle.enter().append("circle")
            .attr("r", 1e-6)
            .on("mousedown", function(d) { selected = dragged = d; redraw(); })
            .transition()
            .duration(750)
            .ease("elastic")
            .attr("r", 6.5);

        this.circle
            .classed("selected", function(d) { return d === selected; })
            .attr("cx", function(d) { return d[0]; })
            .attr("cy", function(d) { return d[1]; });

        this.circle.exit().remove();

        if (d3.event) {
            d3.event.preventDefault();
            d3.event.stopPropagation();
        }
    }

    changeOption() {
        //line.interpolate(this.value);
        //redraw();
        console.log(this.value);
    }

    change() {
        this.line.interpolate(this.value);
        this.redraw();
    }

    mousedown() {
        this.points.push(selected = dragged = d3.mouse(this.svg.node()));
        this.redraw();
    }

    mousemove() {
        if (!this.dragged) return;
        let m = d3.mouse(this.svg.node());
        this.dragged[0] = Math.max(0, Math.min(width, m[0]));
        this.dragged[1] = Math.max(0, Math.min(height, m[1]));
        this.redraw();
    }

    mouseup() {
        if (!this.dragged) return;
        this.mousemove();
        this.dragged = null;
    }

    keydown() {
        if (!this.selected) return;
        switch (d3.event.keyCode) {
            case 8: // backspace
            case 46: { // delete
                var i = this.points.indexOf(this.selected);
                this.points.splice(i, 1);
                this.selected = this.points.length ? this.points[i > 0 ? i - 1 : 0] : null;
                this.redraw();
                break;
            }
        }
    }


    render() {
        return (
            <div>
                <form>
                    <label htmlFor="interpolate">Interpolate:</label>
                    <select id="interpolate"></select><br/>
                </form>

            </div>
        );
    }
}
