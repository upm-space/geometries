
export default class Point{
    constructor(x, y, z,id){
        this.x = x;
        this.y = y;
        this.z = z;
        this.id = id;
    }
    toJson2D(){
        return {x:this.x, y:this.y,id:this.id};
    }
    toJson3D(){
        return {x:this.x, y:this.y, z:this.z};
    }
}

