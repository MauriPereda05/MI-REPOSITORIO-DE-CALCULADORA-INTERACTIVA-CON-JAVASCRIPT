document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('Info');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'C') {
                display.value = ''; 
            } else if (button.textContent === '=') {
                
                const expression = display.value.replace('x', '*'); 
                const result = eval(expression);
                display.value = result || 'Error'; 
            } else {
                display.value += button.textContent;
            }
        });
    });
});



