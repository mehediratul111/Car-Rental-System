function changeText() {
    var name = document.getElementById("fullName").value;
    var heading = document.getElementById("formHeading");

    if (name === "") {
        heading.innerHTML = "Customer Profile";
        document.getElementById("nameError").innerText = "Full name is required!";
    } else {
        heading.innerHTML = name + "'s Profile";
        document.getElementById("nameError").innerText = "";
    }
}

function validateCustomerForm() {
    var name = document.getElementById("fullName").value.trim();
    var dob = document.getElementById("dob").value;
    var license = document.getElementById("licenseNumber").value.trim();
    var upload = document.getElementById("licenseUpload").value;
    var pref = document.getElementById("preferences").value;
    var history = document.getElementById("rentalHistory").value.trim();

    var valid = true;

    // Clear errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("dobError").innerText = "";
    document.getElementById("licenseError").innerText = "";
    document.getElementById("uploadError").innerText = "";
    document.getElementById("prefError").innerText = "";
    document.getElementById("historyError").innerText = "";
    document.getElementById("validerror").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Full name is required!";
        valid = false;
    }

    if (dob === "") {
        document.getElementById("dobError").innerText = "Date of Birth is required!";
        valid = false;
    }

    if (license === "") {
        document.getElementById("licenseError").innerText = "License number is required!";
        valid = false;
    } else {
        var pattern = /^[A-Z0-9]{6,15}$/i;
        if (!pattern.test(license)) {
            document.getElementById("licenseError").innerText = "Invalid license number format!";
            valid = false;
        }
    }

    if (upload === "") {
        document.getElementById("uploadError").innerText = "Please upload your license!";
        valid = false;
    }

    if (pref === "") {
        document.getElementById("prefError").innerText = "Please select a preference!";
        valid = false;
    }

    if (history === "") {
        document.getElementById("historyError").innerText = "Please enter rental history!";
        valid = false;
    }

    if (!valid) {
        document.getElementById("validerror").innerText = "Please fix the errors above!";
    }

    return valid;
}
