
function Bullet(x,y){
		
		this.id = 'b' + GameEngine.bullets.len++
		GameEngine.bullets[this.id] = this
		
		this.ele = $('<div></div>')
		this.ele.addClass('hhh')
		this.ele.appendTo('body')
		
	
	
}
Bullet.prototype.FS = function(){
	var self = this
		this.ele.css({
			
			top:parseInt($('#Plane').css('top'))-14,
			left:parseInt($('#Plane').css('left'))+parseInt($('#Plane').width()/2)
		})
		this.ele.animate({"top":0,},1000,function(){
			this.remove();
			delete 	GameEngine.bullets[self.id]//删除自己子弹
		})
	
}

setInterval(function(){
var a = new Bullet()
	a.FS()
},300)


//子弹爆炸
Bullet.prototype.boom = function(){
	var self = this
	var arr = [
		'url(img/die1.png)',
		'url(img/die2.png)'
	]
	var i = 0
	self.ele.stop()
	var timer = setInterval(function(){
		self.ele.css({'background':arr[i++]})
		self.ele.css({
		width:40,
		height:40
	})
		if(i>=arr.length){
			clearInterval(timer)
			self.ele.remove()
		}
	},100)
	
	delete GameEngine.bullets[this.id]
}
