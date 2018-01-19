var GameEngine = {
	
	enemys:{len:0},
	bullets:{len:0},
	ele:$('#box'),
	touchListen: function() {
		
		setInterval(function() {		
			
		}, 30)	
		
	},
	start:function(){
		var self = this;
		if(Math.random()<0.4){
			setInterval(function(){
			var b = new BigEnemy();
			b.move()
			},2000)
		}
		if(Math.random()<0.7){
			setInterval(function(){
			var b = new MidEnemy();
			b.move()
			},2300)
		}
		if(Math.random()<0.7){
			setInterval(function(){
			var b = new LittleEnemy();
			b.move()
			},2500)
		}
			
	
		
		
		this.ele.animate({'background-position-y':'-230%'},30000,'linear',function(){
			self.ele.css({'background-position-y':'0%'})
			self.start();
			
		})
	}
}
