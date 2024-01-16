let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLast() {
    var currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length - 1);
}

function reset() {
    display.value = '';
}




const circle = document.getElementById('circle');
        let currentPosition = 0;

        circle.addEventListener('click', function () {
            currentPosition = (currentPosition + 1) % 3;

            switch (currentPosition) {
                case 0:
                    circle.classList.remove('centered', 'right');
                    document.body.classList.remove('purple-theme');
                    break;
                case 1:
                    circle.classList.add('centered');
                    document.body.classList.toggle('white-theme');
                    break;
                case 2:
                    circle.classList.remove('centered');
                    circle.classList.add('right');
                    document.body.classList.remove('white-theme')
                    document.body.classList.toggle('purple-theme');
                    break;
            }
        });
