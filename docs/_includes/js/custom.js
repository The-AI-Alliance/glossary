
/** Show or hide a div by clicking a button. */
function add_toggle(toggleId, divId, hiddenAtStart) {
	toggle = document.getElementById(toggleId);
	div = document.getElementById(divId);
	func = function() {
		if (!div) {
		}
		div.toggleAttribute("disabled");
		div.toggleAttribute("hidden");
		return false;
	}
	toggle.addEventListener('click', func);	
	if (hiddenAtStart) {
		func();
	}
}

/** Add filtering of the terms shown. */
function add_filter(filterId) {
	isFiltered = false;
	const filter = document.getElementById(filterId);
	const setAll = function(tf) {
		nodeList = document.querySelectorAll(`[id$=-filter-div]`);
		for (let i = 0; i < nodeList.length; i++) {
			let item = nodeList[i];
			item.disabled = tf;
			item.hidden = tf;
		}
	}
	const disableAll = function() { setAll(true); }
	const enableAll  = function() { setAll(false); }
	const reset = function(e) {
		enableAll();
		isFiltered = false;
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
			list = [];
			list2 = [];
			for (let i = 0; i < nodeList.length; i++) {
				let item = nodeList[i];
				let itemId = item.id.replace("-filter-div", "");
				if (itemId.indexOf(text_) >= 0) {
					item.disabled = false;
					item.hidden = false;
					list.push(item);
				} else {
					item.disabled = true;
					item.hidden = true;
					list2.push(item);
				}
			}
		} else {
			enableAll();
		}
	}
	filter.addEventListener('input', inputHandler);
	filter.addEventListener('propertychange', inputHandler); // for IE8
	// Firefox/Edge18-/IE9+ don’t fire on <select><option>
	// source.addEventListener('change', inputHandler); 
	const filterClear = document.getElementById(`${filterId}-clear`);
	filterClear.addEventListener('click', reset);
}
