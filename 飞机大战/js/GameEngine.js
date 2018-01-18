var GameEngine ={
	ele:$('#box'),
	start:function(){
		var self = this;
		this.ele.animate({'background-position-y':'-230%'},30000,'linear',function(){
			self.ele.css({'background-position-y':'0%'})
			self.start();
			
		})
	}
}
