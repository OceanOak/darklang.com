function clearErrors() {
    document.querySelector('#error-list').innerHTML = '';
    document.querySelector('#errors').style.display = "none";
}

function showErrors(errors) {
    clearErrors();

    document.querySelector('#errors').style.display = "block";

    const errorList = document.querySelector('#error-list')

    for (var i = 0; i < errors.length; i++) {
        let newLI = document.createElement("li");
        newLI.appendChild(document.createTextNode(errors[i]))

        errorList.appendChild(newLI);
    }
}

function showSuccess() {
    const form = document.querySelector("#sign-up-form")

    // remove all but first thing (which is the title)
    const firstElementChild = form.firstElementChild;
    form.innerHTML = '';
    form.append(firstElementChild);


    let successDiv = document.createElement("div");

    let logInLink = document.createElement("a");
    logInLink.classList.add("underline", "underline-offset-2");
    logInLink.href = "https://login.darklang.com";
    logInLink.appendChild(document.createTextNode("log in"));

    successDiv.appendChild(document.createTextNode("Success! "));
    successDiv.append(logInLink)

    form.appendChild(successDiv);
}

async function submitForm(event) {
    event.preventDefault();

    const codeOfConductInput = document.querySelector('#code-of-conduct');

    if (!codeOfConductInput.checked) {
        showErrors(["Please agree to our code of conduct"]);
        return;
    }

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const usernameInput = document.querySelector('#username');

    const form = document.querySelector('form');

    const data = {
        name: nameInput.value,
        email: emailInput.value.toLowerCase(),
        username: usernameInput.value
    };

    const response = await fetch("https://ops-adduser.builtwithdark.com/v3/create-account", {
        method: "POST",
        dataType: "json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.status === 200) {
        form.reset()
        showSuccess()
    } else {
        const errorText = await response.text();
        showErrors([errorText]);
    }
}

document.querySelector('#sign-up-form').addEventListener('submit', submitForm);