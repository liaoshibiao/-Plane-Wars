function BigPlane(){
	this.ele = $("<div></div>")
	this.ele.addClass("bigplane0")
	this.ele.appendTo("#box")
	var x = $('body').width() * Math.random();
	this.ele.css({left:x})
	
	var xx = Math.random()*0.9+0.1;
	if(xx >0.7){
		this.ele.addClass('bigplane1')
		var h = 10000;
	}
	else if(xx >0.4){
		this.ele.addClass('bigplane2')
		var h = 5000;
	}
	else if(xx > 0.1){
		this.ele.addClass('bigplane3')
		var h = 1000;
	}
	this.move(h)
}
BigPlane.prototype.move =  function(h){
	var y = $('body').height();
	this.ele.animate({top:y},h,function(){
		this.remove();
	})
	
}
setInterval(function(){
	var b = new BigPlane();
	b.move()
},1000)