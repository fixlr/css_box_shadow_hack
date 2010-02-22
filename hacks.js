window.onload = function() {
	ss = document.styleSheets[0];
	var rules = ss.cssRules?ss.cssRules:ss.rules;
	
	for (var i = 0; i < rules.length; i++) {
		rule = rules[i];
		document.body.innerHTML += rule.cssText; 
			//.replace(/box\-shadow\:(.+?)\;/, "-webkit-box-shadow:$1;");

	}
}