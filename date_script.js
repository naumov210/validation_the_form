function getFirstName() {
    let input = document.getElementById('first-name');
    let resalt = document.getElementById('resultFirstName')

    input.onkeyup = input.oncopy = input.onpaste = input.oncut = (function () {
        return function () {
            resultFirstName.innerHTML = this.value;
        }
    })();
}

function getLastName() {
    let input = document.getElementById('last-name');
    let resalt = document.getElementById('resultLastName')

    input.onkeyup = input.oncopy = input.onpaste = input.oncut = (function () {
        return function () {
            resultLastName.innerHTML = this.value;
        }
    })();
}

function getRadioChecked() {
    let radioGender = document.getElementsByClassName("gender"),
        radioChecked = [];

    for (let i = 0; i < radioGender.length; i++) {
        if (radioGender[i].checked) {
            radioChecked.push(radioGender[i].value);
            resultGender.innerHTML = radioChecked.join();
        }
    }
}

function getPhone() {
    let input = document.getElementById('phone');
    let resalt = document.getElementById('resultPhone')

    input.onkeyup = input.oncopy = input.onpaste = input.oncut = (function () {
        return function () {
            resultPhone.innerHTML = this.value;
        }
    })();
}

function getEmail() {
    let input = document.getElementById('email');
    let resalt = document.getElementById('resultEmail')

    input.onkeyup = input.oncopy = input.onpaste = input.oncut = (function () {
        return function () {
            resultEmail.innerHTML = this.value;
        }
    })();
}

function getCheckboxesChecked() {
    let checkboxesHobby = document.getElementsByClassName("hobby"),
        hobbyChecked = [];

    for (let i = 0; i < checkboxesHobby.length; i++) {
        if (checkboxesHobby[i].checked) {
            hobbyChecked.push(checkboxesHobby[i].value);
            resultHobby.innerHTML = hobbyChecked.join(', ');
        }
    }
}

function getDate() {
    let input = document.getElementById('date');
    let resalt = document.getElementById('resultDate')

    input.onkeyup = input.oncopy = input.onpaste = input.oncut = (function () {
        return function () {
            resultDate.innerHTML = this.value;
        }
    })();
}