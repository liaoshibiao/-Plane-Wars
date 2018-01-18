function Plane(Id){
	this.ele = $(Id)

}

Plane.prototype.one = function(){
	
	var a = this;
	this.ele.mousedown(function(e){
		e.preventDefault()
		var X = e.offsetX
		var Y = e.offsetY
		$(document).mousemove(function(e){
			e.preventDefault()
			var x = e.clientX - X;
			var y = e.clientY - Y;
			a.two(x, y);
			
		})
			
		$(document).mouseup(function(){
			a.three()
		})
	})
	
	
	$(document).keydown(function(b){
		//console.log(a.keyCode);
		if(b.keyCode==37){
		$('#Plane').css({'left':'-=20px'})
		
		}
		if(b.keyCode==39){
			//console.log('右')
			$('#Plane').css({'left':'+=20px'})
		}
	})
	
//		if($('#Plane').position().left < 20){
//			alert(2)
//		}
}
Plane.prototype.two = function(x, y) {
	//console.log(y)
	
	
	if(x<0){
		x=0
	}
	if(y<0){
		y=0;
	}
	
	var A = $('body').width() - this.ele.width();
	var B = $('body').height() - this.ele.height();
	if(x>A){
		x=A
	}
	if(y>B){
		y=B
	}
	
	this.ele.css({
		left: x,
		top: y
	})

}
Plane.prototype.three = function(){
	$(document).off("mouseup mousemove")
}




