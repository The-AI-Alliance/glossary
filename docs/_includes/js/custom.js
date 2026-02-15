
/** Show or hide a div by clicking a button. */
function add_toggle(toggleId, divId, hiddenAtStart) {
	const toggle = document.getElementById(toggleId);
	const div = document.getElementById(divId);
	const doToggle = function(e) {
		div.toggleAttribute("disabled");
		div.toggleAttribute("hidden");
		return false;
	}
	toggle.addEventListener('click', doToggle);	
	if (hiddenAtStart) {
		doToggle();
	}
}

/** Add filtering of the terms shown. */
function add_filter(filterId) {
	isFiltered = false;
	const filter = document.getElementById(filterId);
	const setAll = function(tf) {
		nodeList = document.querySelectorAll(`[id$=-filter-div]`);
		if (tf) {
			console.log(nodeList);
		}
		for (let i = 0; i < nodeList.length; i++) {
			let item = nodeList[i];
			item.disabled = tf;
			item.hidden = tf;
		}
	}
	const disableAll = function() { setAll(true); }
	const enableAll  = function() { setAll(false); }
	const reset = function(e) {
		filter.value = "";
		isFiltered = false;
		enableAll();
	}
	const inputHandler = function(e) {
		if (!isFiltered) {
			isFiltered = true;
			disableAll();
		}
		text = e.target.value.toLowerCase().trim();
		if (text) {
			let text_  = text.replace(" ", "-");
			nodeList = document.querySelectorAll(`[id$=-filter-div]`);
			list_not_hidden = [];
			list_hidden = [];
			for (let i = 0; i < nodeList.length; i++) {
				let item = nodeList[i];
				let itemId = item.id.replace("-filter-div", "");
				if (itemId.indexOf(text_) >= 0) {
					item.disabled = false;
					item.hidden = false;
					list_not_hidden.push(item);
				} else {
					item.disabled = true;
					item.hidden = true;
					list_hidden.push(item);
				}
			}
			console.log(list_hidden)
		} else {
			enableAll();
		}
		return true;
	}
	filter.addEventListener("input", inputHandler);
	// filter.addEventListener("propertychange", inputHandler); // for IE8
	// Firefox/Edge18-/IE9+ don’t fire on <select><option>
	// filter.addEventListener("change", inputHandler); 
	const filterClear = document.getElementById(`${filterId}-clear`);
	filterClear.addEventListener("click", reset);
}

/** Add handling of a button that causes a scrolling div to return to its top, bottom, or elsewhere. */
function add_scroll_to_top(buttonId, divId) {
	const button = document.getElementById(buttonId);
 	const div = document.getElementById(divId);
	const scroll_to = function(e) {
		div.scrollTo(0, 0);
	}
	button.addEventListener("click", scroll_to);
	return false;
}

letter_tops = {}

function scroll_to_letter(letter, divId) {
	const div = document.getElementById(divId);
	const div_rect = div.getBoundingClientRect();
	if (!letter_tops[letter]) {
		div.scrollTo(0, 0);
		caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for (let i = 0; i < caps.length; i++) {
			const elem = document.getElementById(`${caps[i].toLowerCase()}-filter-div`);
			letter_tops[caps[i]] = elem.getBoundingClientRect().top;
		}	
		console.log(letter_tops);
	}
	// We use `div_rect` to determine the current offset of the div, i.e., how much it
	// is already scrolled, then calculate the delta from it to where we want to be.
	// That's how much we scroll.
	div.scrollTo({
		left: 0,
		top: letter_tops[letter] - div_rect.top,
		behavior: "smooth",
	});
	return false;
}
