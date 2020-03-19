(document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const changingText = document.getElementById('changingText');
        const model = {
            displayText: ['Cooking gone wrong?', 'Late Night At Office?', 'Movie Marathon?', 'Unexpected Guests?', 'Game Night?', 'Hungry?'],
            current: 0
        };
        const view = {
            init: () => {
                changingText.innerHTML = model.displayText[model.current];
                model.current = (model.current + 1) % 6;
            },
            render: () => {
            }
        };
        const controller = {
            init: () => {
                setInterval(view.init, 2000);
            }
        };
        controller.init();
    }
})();
