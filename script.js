function checkAnswer() {
    const radios = document.getElementsByName('verb');
    let selected = '';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = radios[i].value;
            break;
        }
    }

    const result = document.getElementById('result');
    if (selected === 'kommen') {
        result.textContent = 'Richtig!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Leider falsch. Versuchen Sie es erneut!';
        result.style.color = 'red';
    }
}
