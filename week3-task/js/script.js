// Assignment of event handlers to input elements 
const allInputs = document.querySelectorAll("input");

const handlePlaceHolder = (event) => {
    event.target.attributes[5].nodeValue = "";
}

const handleFocusExit = (event) => {
    const placeHolder = event.target.nextElementSibling.textContent;

    if(event.target.value.length < 1){
        event.target.attributes[5].nodeValue = placeHolder;
    }
}

for(var ind = 0; allInputs.length > ind; ind++){
    if(allInputs[ind].type !== 'checkbox'){
        
        // Add event listener to all allTextInputs
        allInputs[ind].addEventListener('focus', event => handlePlaceHolder(event));
        allInputs[ind].addEventListener('blur', event => handleFocusExit(event));

    }
}

// Assignment of event handler for only username input element
const userName = document.querySelector("#user-name");
userName.addEventListener('focus', event => {
    const nextSibling = event.target.nextElementSibling;
    const placeHolder = nextSibling.nextElementSibling.textContent;
    event.target.attributes[5].nodeValue = "";

    const legend = nextSibling.nextElementSibling;
    legend.style.display = 'block';
    
});

userName.addEventListener('blur', event => {
    const nextSibling = event.target.nextElementSibling;
    const placeHolder = nextSibling.nextElementSibling.textContent;
    

    if(event.target.value.length < 1){
        event.target.attributes[5].nodeValue = placeHolder;
    }

    const legend = nextSibling.nextElementSibling;
    legend.style.display = 'none';
});


// Toggle password actual text value
const checkbox = document.querySelector("#show-password");
const togglePasswordValue = (event) => {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");

    if(checkbox.checked){
        password.type = 'text';
        confirmPassword.type = 'text';
    }else{
        password.type = 'password';
        confirmPassword.type = 'password';
    }

}
checkbox.addEventListener('click', event => togglePasswordValue(event));

// Assignment of handlers to Next button
const nextButton = document.querySelector("form");
nextButton.addEventListener('submit', event => {
    // console.log('submitted!');
    event.preventDefault();
    alert("Successfully submitted");

})
