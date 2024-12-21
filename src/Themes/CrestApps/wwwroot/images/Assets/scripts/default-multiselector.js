window.addEventListener('mousedown', (e) => {

    var el = e.target;
    if (el.tagName.toLowerCase() == 'option') {

        var parentElement = el.closest('select');

        if (parentElement && parentElement.hasAttribute('multiple')) {
            e.stopPropagation();
            e.preventDefault();
            e.target.focus();

            el.selected = !el.selected;
            parentElement.dispatchEvent(new Event('change'));
        }
    }
});
