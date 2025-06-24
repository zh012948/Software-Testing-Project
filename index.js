var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}



document.querySelector(".admin-form").addEventListener("submit", function (e) {
    const inputName = document.getElementById("name");
    const fatherName = document.getElementById("fname");
    const mobileNumber = document.getElementById("number");
    const domicile = document.getElementById("domicile");
    const matricMajor = document.getElementById("matric");
    const interMajor = document.getElementById("intermediate");
    const gender = document.getElementById("gender").value;
    const program = document.getElementById("program").value;

    // Helper function to check if value contains only letters and spaces
    function isOnlyLetters(value) {
        return /^[A-Za-z\s\-]+$/.test(value.trim());

    }


    // Validate Name
    if (!isOnlyLetters(inputName.value)) {
        alert("Your name must contain only letters.");
        inputName.focus();
        e.preventDefault();
        return;
    }

    // Validate Father Name
    if (!isOnlyLetters(fatherName.value)) {
        alert("Father's name must contain only letters.");
        fatherName.focus();
        e.preventDefault();
        return;
    }

    // Validate Mobile Number (must be exactly 11 digits)
    if (!/^\d{11}$/.test(mobileNumber.value)) {
        alert("Mobile number must be exactly 11 digits and numeric.");
        mobileNumber.focus();
        e.preventDefault();
        return;
    }

    // Validate Domicile (must contain only letters)
    if (!isOnlyLetters(domicile.value)) {
        alert("Domicile must contain only letters.");
        domicile.focus();
        e.preventDefault();
        return;
    }


    if (!isOnlyLetters(matricMajor.value)) {
        alert("Matric Major must contains only letters.")
        matricMajor.focus();
        e.preventDefault();
        return;
    }

    if (!isOnlyLetters(interMajor.value)) {
        alert("Intermediate Major must contains only letters.")
        interMajor.focus();
        e.preventDefault();
        return;
    }


    if (gender === '0') {
        alert("Please select any gender from the options!!!");
        e.preventDefault();
        return;
    }

    if (program === '0') {
        alert("Please select any program from the options!!!");
        e.preventDefault();
        return;
    }


    // If all passed, the form submits

});