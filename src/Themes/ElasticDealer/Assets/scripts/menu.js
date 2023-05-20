document.addEventListener("DOMContentLoaded", function() {
	const header = document.querySelector('header');
	const main = document.querySelector('main');
	const bufferHeight = 75;
	
	if(!header) {
		console.log('unable to find the header element. Please wrap the navigation with an HTML header element.');
		return;
	}

	if(!main) {
		console.log('unable to find the main element. Please wrap your site main content in a main HTML element.');
		return;
	}

	const introSelector = header.querySelector('.intro-container');

	window.addEventListener('scroll', function() {
	    if (window.scrollY > bufferHeight) {
			header.classList.add('fixed-top');
	        // add padding top to show content behind navbar.
	        document.body.style.paddingTop = header.querySelector('.navbar').offsetHeight + 'px';

	        if(introSelector) {
	        	// move intro to main.
        		for(let i = 0; i < header.classList.length; i++) {
        			if(header.classList[i] != 'fixed-top') {		        			
	        			introSelector.classList.add(header.classList[i]);
	        		}
        		}

        		var fragment = document.createDocumentFragment();
        		fragment.appendChild(introSelector);
        		main.prepend(fragment);
	        }
	    } else {
	        header.classList.remove('fixed-top');
	        // remove padding top from body
	        document.body.style.paddingTop = '0';

	        if(introSelector) {
	        	// restore intro position.
        		for(let i = 0; i < header.classList.length; i++) {
        			introSelector.classList.remove(header.classList[i]);
        		}

        		var fragment = document.createDocumentFragment();
        		fragment.appendChild(introSelector);
        		header.append(fragment);
	        }
		} 
	});
});
