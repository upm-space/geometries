import Point from './../geometry/point.js';

export default class Curves {
    toD3Bezier(arrPoints,numberOfPoints){
        let curvePoints = [];
        if(!numberOfPoints){
            numberOfPoints = 100;
        }
        let delta = 1/numberOfPoints;
        let i = 0;

        for(i = 0; i <= 1; i += delta){   
            let x = Math.pow((1-i),2) * arrPoints[0].x + 2*i*(1-i)*arrPoints[1].x + Math.pow(i,2)*arrPoints[2].x;
            let y = Math.pow((1-i),2) * arrPoints[0].y + 2*i*(1-i)*arrPoints[1].y + Math.pow(i,2)*arrPoints[2].y;
            let point = new Point(x,y,0); 
            curvePoints.push(point);
        }
        return curvePoints;
    }

}