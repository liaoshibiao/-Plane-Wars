function Enemy(){
	this.ele = $("<div></div>")
	this.ele.addClass("enemy")
	this.ele.appendTo("#box")
	var x = $('body').width() * Math.random();
	this.ele.css({left:x})
	this.move()
}
Enemy.prototype.move =  function(){
	var y = $('body').height();
	this.ele.animate({top:y},5000,function(){
		this.remove();
	})
	
}
setInterval(function(){
	var b = new Enemy();
	b.move()
},1000)