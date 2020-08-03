function setupListener() {
	var element = document.getElementById('markdown');
	if (element) {
		element.onkeyup = function () {
			document.getElementById('preview').innerHTML = marked(element.value);
		}
	}
}

setupListener();
