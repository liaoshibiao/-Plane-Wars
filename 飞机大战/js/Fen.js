var Fen = {
	sum:0,
	addFen:function(a){
		this.sum+=a
		//document.title = this.sum;
		$('#jifen').html(this.sum)
	}
}
