
export default class Point{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    toJson2D(){
        return {x:this.x,y:this.y};
    }
    toJson3D(){
        return {x:this.x,y:this.y,z:this.z};
    }
}

