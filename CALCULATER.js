const screen = document.querySelector('.screen input');
const buttons = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'Clear') {
            screen.value = '';
        } else {
            screen.value += value;
        }
    });
});

equalButton.addEventListener('click', () => {
    try {
        // eslint-disable-next-line no-eval
        screen.value = eval(screen.value);
    } catch (err) {
        screen.value = 'Error';
    }
});