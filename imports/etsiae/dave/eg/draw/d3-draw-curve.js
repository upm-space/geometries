
export default class D3DrawCurve{
    constructor(arrPoints){
        this.points = arrPoints;
    }
    drawToD3(canvasSVG){
        canvasSVG.selectAll("circle")
            .data(this.points)
            .enter().append("circle")
            .style("stroke", "black")
            .style("fill", "black")
            .attr("r", function(d){1})
            .attr("cx", function(d){return d.x})
            .attr("cy", function(d){return d.y});

       /*
        var sampleSVG = d3.select("#viz")
            .append("svg")
            .attr("width", 500)
            .attr("height", 300);    

            sampleSVG.selectAll("circle")
            .data(this.points)
            .enter().append("circle")
            .style("stroke", "gray")
            .style("fill", "none")
            .attr("r", function(d){return d.radius})
            .attr("cx", function(d){return d.x})
            .attr("cy", 120);
        */
    }
}