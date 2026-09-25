const screen = document.querySelector('.screen input');
const buttons = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'Clear') {
            screen.value = '';
        } else if (value === '⌫' || value === 'Backspace') {
            screen.value = screen.value.slice(0, -1);
        } else {
            screen.value += value;
        }
    });
});

equalButton.addEventListener('click', () => {
    try {
        screen.value = eval(screen.value);
    } catch (err) {
        screen.value = 'Error';
    }
});