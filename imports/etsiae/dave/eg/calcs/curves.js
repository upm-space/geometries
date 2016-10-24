import Point from './../geometry/point.js';

export default class Curves {
    toD3Bezier_old(controlPoints,delta_t){
        let curvePoints = [];
        if(!delta_t){
            delta_t = 100;
        }
        let delta = 1/delta_t;
        let i = 0;

        for(i = 0; i <= 1; i += delta){   
            let x = Math.pow((1-i),2) * controlPoints[0].x + 2*i*(1-i)*controlPoints[1].x + Math.pow(i,2)*controlPoints[2].x;
            let y = Math.pow((1-i),2) * controlPoints[0].y + 2*i*(1-i)*controlPoints[1].y + Math.pow(i,2)*controlPoints[2].y;
            let point = new Point(x,y,0); 
            let pointJson = point.toJson2D();
            curvePoints.push(pointJson);
        }
        return curvePoints;
    }

    toD3Bezier(controlPoints,delta_t){
        let curvePoints = [];
        let n = controlPoints.length;
        let t,i;
        for(t = 0; t <= 1; t += delta_t){
            let x=0,y=0;
            for(i = 0; i < n ; i++){
                x = x + (this.sFact(n)/(this.sFact(i)*this.sFact(n-i)))*Math.pow(t,i)*Math.pow((1-t),(n-i))*controlPoints[i].x;
                y = y + (this.sFact(n)/(this.sFact(i)*this.sFact(n-i)))*Math.pow(t,i)*Math.pow((1-t),(n-i))*controlPoints[i].y;
            }
            let point = new Point(x,y,0);
            let pointJson = point.toJson2D();
            curvePoints.push(pointJson);
        }
        return curvePoints;
    }

    sFact(num)
    {
        var rval=1;
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    }


}