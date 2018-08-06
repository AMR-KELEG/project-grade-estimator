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

	var total_score_elem = document.getElementById('total_score');
	var cur_total = parseInt(total_score_elem.getAttribute('score'));
	var score_change = null;
	if (selected_item === elem)
	{
		elem.setAttribute('selected', 'False');
		elem.style.background = '#FFFFFF'
		score_change = -parseInt(elem.getAttribute('score'));
	}

	else if (selected_item === null) {
		elem.setAttribute('selected', 'True');
		elem.style.background = '#9370DB';
		score_change = parseInt(elem.getAttribute('score'));
	}
	else
	{
		elem.setAttribute('selected', 'True');
		selected_item.setAttribute('selected', 'False');
		elem.style.background = '#9370DB';
		score_change = parseInt(elem.getAttribute('score')) -
					parseInt(selected_item.getAttribute('score'));
	}
	total_score.setAttribute('score', cur_total + score_change);
	total_score.innerText = cur_total + score_change;
	score_item.setAttribute('score', parseInt(score_item.getAttribute('score')) + parseInt(score_change));
	score_item.innerText = parseInt(score_item.getAttribute('score'));
}
