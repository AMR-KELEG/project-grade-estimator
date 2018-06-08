function updateScore(elem){
	var x = elem.parentElement;
	// alert(x.children.length);
	var c = x.children;
	var i;
	for (i = 0; i < c.length; i++) {
		if (c[i].id == 'score')
		{
			var delta = elem.getAttribute('score') - parseInt(c[i].getAttribute('score'));
			c[i].innerText = elem.getAttribute('score');
			c[i].setAttribute('score', elem.getAttribute('score'));
			var total_score = document.getElementById('total_score');
			var cur_total = parseInt(total_score.getAttribute('score'));
			cur_total += delta;
			total_score.setAttribute('score', cur_total);
			total_score.innerText = cur_total;
		}
		c[i].style.backgroundColor = '#D3D3D3';
	}
	elem.style.background = '#9370DB';
}