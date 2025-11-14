(function() {

    let clearThemes = () => {
        document.body.classList = '';
    }

    let setTheme = (theme) => {
        clearThemes();
        document.body.classList.add('theme-' + theme);
    }

    window.addEventListener('button-clicked', ev => {
        if(ev.detail.action === 'changeTheme') {
            let theme = ev.target.getAttribute('data-theme');

            if(theme) {
                setTheme(theme);
            }
        }
    });

})();

