(
  document.onreadystatechange = (): void => {
    if (document.readyState === 'complete') {
      const changingText = document.getElementById(
          'changingText') as HTMLDivElement;
      const model = {
        displayText: ['Cooking gone wrong?', 'Late Night At Office?',
          'Movie Marathon?', 'Unexpected Guests?', 'Game Night?', 'Hungry?'],
        current: 0,
      };
      const view = {
        init: (): void => {
          changingText.innerHTML = model.displayText[model.current];
          model.current = (model.current + 1) % 6;
        },
      };
      const controller = {
        init: (): void => {
          setInterval(view.init, 2000);
        },
      };
      controller.init();
    }
  }
)();
