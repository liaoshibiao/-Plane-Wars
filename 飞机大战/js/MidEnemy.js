function MidEnemy(){
	Enemy.call(this)
	this.hp = 5
	this.fen = 5
	this.speed = 5
	this.ele.removeClass().addClass('mid_enemy')
	this.dieImg = [		
		"url(img/plain2_die1.png)",
		"url(img/plain2_die2.png)",
		"url(img/plain2_die3.png)",
		"url(img/plain2_die4.png)"
	]
}
MidEnemy.prototype = Enemy.prototype;

