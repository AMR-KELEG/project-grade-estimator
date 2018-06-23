function updateScore(elem){
	var parent_question = elem.parentElement;
	var c = parent_question.children;
	var i;
	var selected_item = null;
	var score_item = null;
	for (i = 0; i < c.length; i++) {
		if (c[i].id == 'score') {
			score_item = c[i];
			break;
		}
	}
	for (i = 0; i < c.length; i++) {
		if (c[i].hasAttribute('selected') &&
			c[i].getAttribute('selected') == 'True') {
			c[i].style.background = '#FFFFFF';
			selected_item = c[i];
			break;
		}
	}
			/*
			var delta = elem.getAttribute('score') - parseInt(c[i].getAttribute('score'));
			c[i].innerText = elem.getAttribute('score');
			c[i].setAttribute('score', elem.getAttribute('score'));
			cur_total += delta;
			total_score.setAttribute('score', cur_total);
			total_score.innerText = cur_total;
			*/
	var total_score = document.getElementById('total_score');
	var cur_total = parseInt(total_score.getAttribute('score'));
	if (selected_item === elem)
	{
		elem.setAttribute('selected', 'False');
		elem.style.background = '#FFFFFF'
		cur_total = 0;
	}

	else if (selected_item === null) {
		elem.setAttribute('selected', 'True');
		elem.style.background = '#9370DB';
		cur_total += parseInt(elem.getAttribute('score'));
	}
	else
	{
		elem.setAttribute('selected', 'True');
		selected_item.setAttribute('selected', 'False');
		elem.style.background = '#9370DB';
		cur_total += parseInt(elem.getAttribute('score')) -
					parseInt(selected_item.getAttribute('score'));
	}
	total_score.setAttribute('score', cur_total);
	total_score.innerText = cur_total;
	score_item.innerText = cur_total;
}
