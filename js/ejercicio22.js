const input = document.getElementById('textinput');
const output = document.getElementById('output');

input.addEventListener('input', function() {
    const value = input.value;
    output.textContent = value;

    if (value.length > 20) {
        output.classList.add('long-text');
    } else {
        output.classList.remove('long-text');
    }
    });