import Curves from '../calcs/curves.js';
import D3DrawCurve from './d3-draw-bezier.js';

export default class D3DrawBezier{
    constructor(svgContainer, arrControlPoints){
        this.controlPoints = arrControlPoints;
        this.svgContainer = svgContainer;
    }
    buildCurve(numberOfPoints){
         let curveCalc = new Curves();
         let points = curveCalc.toD3Bezier(this.controlPoints,numberOfPoints);   
         let curve = new D3DrawCurve();
         curve.drawToD3(this.svgContainer);
    }
}