function LittleEnemy(){
	Enemy.call(this)
	this.fen = 2
	this.hp = 5
	this.speed = 5
	this.ele.removeClass().addClass('little_enemy')
	this.dieImg = [		
		"url(img/plain1_die1.png)",
		"url(img/plain1_die2.png)",
		"url(img/plain1_die3.png)"
	]
}
LittleEnemy.prototype = Enemy.prototype;

