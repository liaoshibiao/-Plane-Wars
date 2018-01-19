function BigEnemy(){
	Enemy.call(this)
	this.fen = 10
	this.hp = 10 
	this.speed = 5
	this.ele.removeClass().addClass('big_enemy')
	this.dieImg = [
		"url(img/plain3_die1.png)",
		"url(img/plain3_die2.png)",
		"url(img/plain3_die3.png)",
		"url(img/plain3_die4.png)",
		"url(img/plain3_die5.png)",
		"url(img/plain3_die6.png)"
	]
}
BigEnemy.prototype = Enemy.prototype;

