var elTitle = document.querySelector('.title');
var elSelect = document.querySelector('.select');
var elForm = document.querySelector('form');


elForm.addEventListener('submit', function (bt) {
    bt.preventDefault()
    var inpOne = document.querySelector('.inp_one').value * 1
    var inpTwo = document.querySelector('.inp_two').value * 1
    var result;

    if (elSelect.value == '+') {
        result = inpOne + inpTwo
    } else if (elSelect.value == '-') {
        result = inpOne - inpTwo
    } else if (elSelect.value == '/') {
        result = inpOne / inpTwo
    } else if (elSelect.value == '*') {
        result = inpOne * inpTwo
    } else {
        h1.textContent = "try again"
    }

    elTitle.textContent = result
})


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Kodni korish taqiqlanadi ❗️❗️❗️");
});


