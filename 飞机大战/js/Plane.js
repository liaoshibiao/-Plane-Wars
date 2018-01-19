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
			if($('#Plane').position().left < 0){
				
				$('#Plane').css({'left':'0px'})
			}
		}
		if(b.keyCode==38){
			$('#Plane').css({'top':'-=20px'})
		if($('#Plane').position().top < 0){
				
				$('#Plane').css({'top':'0px'})
			}
		}
		if(b.keyCode==39){
			//console.log('右')
			$('#Plane').css({'left':'+=20px'})
			if($('#Plane').position().left > 1420){
				
				$('#Plane').css({'left':'1420px'})
			}
		}
		console.log($('body').width())
		if(b.keyCode==40){
			
			$('#Plane').css({'top':'+=20px'})
			if($('#Plane').position().top > 607){
				
				$('#Plane').css({'top':'607px'})
			}
		}
	})
	
		
		
		
		
		
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




