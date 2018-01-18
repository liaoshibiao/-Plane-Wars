
function Bullet(x,y){
	
	
		this.ele = $('<div></div>')
		this.ele.addClass('hhh')
		this.ele.appendTo('body')
		
	
	
}
Bullet.prototype.FS = function(){
	
		this.ele.css({
			
			top:parseInt($('#Plane').css('top'))-14,
			left:parseInt($('#Plane').css('left'))+parseInt($('#Plane').width()/2)
		})
		this.ele.animate({"top":0,},1000,function(){
			this.remove();
		})
	
}

setInterval(function(){
var a = new Bullet()
	a.FS()
},60)