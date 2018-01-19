var Te = {
		isTouchEnemy:function(){
			//得到子弹
			var bullets = GameEngine.bullets;
			var enemys = GameEngine.enemys;
			for(var k in bullets){
					if(k == 'len'){
						continue
					}
					var b = bullets[k]
					for(var j in enemys){
							if(j == 'len'){
							continue
							}
							var e = enemys[j]
							if(isTouch(b.ele,e.ele)){
								//子弹要爆炸了
								//b.boom()
								//敌机扣血
								//console.log('碰到了')
								e.looseBlood()
								b.boom()
							}
					}
			}
		},
		touchListen:function(){
			var self = this
		setInterval(function(){
			self.isTouchEnemy()
		},30)
		
	}
}
