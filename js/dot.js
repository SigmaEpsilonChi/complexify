function Dot(c, origin){
    console.log("Creating new dot at "+c.toString());
    console.log("Real: "+c.real);
    console.log("Imag: "+c.imag);
	this.value = c;
    this.origin = origin;
    this.index = dots.length;
}

Dot.prototype = {
    draw: function(){
        var point = complexToPoint(this.value);
        var transformedPoint = complexToPoint(transform(this.value));
        //console.log("Drawing dot "+dots.indexOf(this)+" at "+pointString(point)+", "+pointString(transformedPoint));

        if (this.origin != null) camera.drawLine(complexToPoint(this.origin.value), complexToPoint(this.value), 0.02, "black");

        camera.drawCircle(point, 0.1, "black");

        if (iterate || newDots.includes(this)) {
            camera.drawLine(point, transformedPoint, 0.02, "blue");
            camera.drawCircle(transformedPoint, 0.1, "blue");
        }
    },

    setValue: function(c){
        this.value = c;
    },
};