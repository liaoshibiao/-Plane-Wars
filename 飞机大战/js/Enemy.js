function Enemy(){
	 this.id = 'e'+GameEngine.enemys.len++;
	GameEngine.enemys[this.id] = this;
	
	this.hp  = 1
	this.speed = 5
	this.ele = $("<div></div>")
	this.ele.addClass("enemy")
	this.ele.appendTo("#box")
	var x = $('body').width() * Math.random();
	this.ele.css({left:x,
		top:-300
	})

	//this.move()
}
Enemy.prototype.move =  function(){

	var y = $('body').height();
	
	var h = 100000 / this.speed
	var self = this
	this.ele.animate({top:y},h,function(){
		this.remove();
		delete 	GameEngine.enemys[self.id]
	})
	
}

//敌机掉血
Enemy.prototype.looseBlood = function(){
	var self = this;
	this.hp--
	if(this.hp<=0){
		Fen.addFen(this.fen)
		//this.ele.remove()//删除
		var i = 0;
		var timer = setInterval(function(){
			self.ele.css('background',self.dieImg[i++])
			if(i>=self.dieImg.length){
				clearInterval(timer)
				self.ele.remove()
			}
		},100)
		delete GameEngine.enemys[this.id]
	}
}

