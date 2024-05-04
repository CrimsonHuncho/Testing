document.addEventListener("DOMContentLoaded", function() {
    // Slider
    let slider = document.getElementById("range");
    let output = document.getElementById("range-scale");
    output.innerHTML = '$' + slider.value;

    slider.oninput = function() {
        output.innerHTML = '$' + this.value;
    }
});

// FirstName Validation//
function validateFname() {
     fname = document.getElementById("fname").value.trim;
    var namePattern = /^[a-zA-Z]+$/;

    if (firstName.length === 0) {
        document.getElementById("fname-error").innerHTML =
            "First Name cannot be empty";
        return false;
    } else if (fname !== "") {
        if (!fname.match(namePattern)) {
            document.getElementById("fname-error").innerHTML =
                "First Name can only contain letters";
            return false;
        } else if (fname.length < 2) {
            document.getElementById("fname-error").innerHTML =
                "First Name must be at least 2 characters";
            return false;
        } else if (fname.length > 30) {
            document.getElementById("fname-error").innerHTML =
                "First Name must not exceed 30 characters";
            return false;
        } else {
            document.getElementById("fname-error").innerHTML = "";
            return true;
        } 
    }
}   //Last Name Validation//
    function lnamevalidation() {
        lname = document.getElementById("lname").value.trim();
        var namePattern = /^[a-zA-Z]+$/;
        if (lname.length === 0) {
            document.getElementById("lname-error").innerHTML =
                "Last Name cannot be empty";
            return false;
        } else if (lname !== "") {
            if (!lname.match(namePattern)) {
                document.getElementById("lname-error").innerHTML =
                    "Last Name can only contain letters";
                return false;
            } else if (lname.length < 2) {
                document.getElementById("lname-error").innerHTML =
                    "Last Name must be at least 2 characters";
                return false;
            } else if (lname.length > 30) {
                document.getElementById("lname-error").innerHTML =
                    "Last Name must not exceed 30 characters";
                return false;
            } else {
                document.getElementById("lname-error").innerHTML = "";
                return true;
            }
        }
    }
    // Email Validation //
        function emailValidation() {
            var email = document.getElementById("email").value;
            var emailError = document.getElementById("email-error");
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (email.length === 0) {
                emailError.innerHTML = "Email cannot be empty";
                return false;
            } else if (!email.match(emailPattern)) {
                emailError.innerHTML = "Invalid email format";
                return false;
            } else {
                emailError.innerHTML = "";
                return true;
            }
        }


// Date
var todaySpan = document.getElementById('today');
var todayDate = new Date();
var year = todayDate.getFullYear();
var month = ('0' + (todayDate.getMonth() + 1)).slice(-2);
var day = ('0' + todayDate.getDate()).slice(-2);
var formattedDate = month + '/' + day + '/' + year;
todaySpan.innerHTML = formattedDate;

// DOB validation
function validateDob() {
    let dob = document.getElementById("dob");
    let dobError = document.getElementById("dob-error");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
    let regex = /^\d{4}-\d{2}-\d{2}$/; // Date format: YYYY-MM-DD

    if (!regex.test(dob.value)) {
        dobError.innerHTML = "Invalid date format. Use YYYY-MM-DD.";
        return false;
    } else if (date > new Date()) {
        dobError.innerHTML = "Date cannot be in the future";
        return false;
    } else if (date < new Date(maxDate)) {
        dobError.innerHTML = "Date cannot be more than 120 years ago";
        return false;
    } else {
        dobError.innerHTML = "";
        return true;
    }
}
// Phone validation
function validateNumber() {
    const numberInput = document.getElementById("number").value;
    const number = numberInput.replace(/\D/g, "");

    if (number.length !== 10) {
        document.getElementById("number-error").innerHTML = "Please enter a valid phone number";
        return false;
    }}
// Address Validation //
function validateAddress() {
    address = document.getElementById("address").value.trim();

    if (!address) {
        document.getElementById("address-error").innerHTML = "Address cannot be empty";
        return false;
    } else {
        document.getElementById("address-error").innerHTML = "";
        return true;
    }}

    // City Validation //
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be empty";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }}
// Zip Code Validation //
function validateZip() {
    zip = document.getElementById("zip").value.trim();
    let zip = zipInput.value.replace(/\D/g, "");

    if (!zip) {
        document.getElementById("zip-error").innerHTML = "Zip Code cannot be empty";
        return false;
    } else if (!zip.match(zipPattern)) {
        document.getElementById("zip-error").innerHTML = "Zip Code must be 5 digits";
        return false;
    } else {
        document.getElementById("zip-error").innerHTML = "";
        return true;
    }
}
// SSN //
function validateSSN() {
    var ssn = document.getElementById("ssn").value;

    // Regular expression to validate SSN
    var ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML =
            "Please enter a valid Social Security Number (e.g xxx-xxx-xxxx)";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// User ID //
function validateUserId() {
    var userId = document.getElementById("userid").value.toLowerCase();

    // Redisplay User ID //
    document.getElementById("userid").value = userId;

    if (userId.length === 0) {
        document.getElementById("userid-error").innerHTML =
            "User ID cannot be empty";
        return false;
    }

    // Check that User ID only contains letters, numbers, or underscores
    var regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(userId)) {
        document.getElementById("userid-error").innerHTML =
            "User ID can only contain numbers, letters, and/or underscores";
        return false;
    } else if (userId.length < 5) {
        document.getElementById("userid-error").innerHTML =
            "User ID must be at least 5 characters";
        return false;
    } else if (userId.length > 30) {
        document.getElementById("userid-error").innerHTML =
            "User ID must not exceed 30 characters";
        return false;
    } else {
        // If checks are all good, User ID is valid
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
}

// Password //
function validatePassword() {
    const pwd = document.getElementById("pwd").value;
    const user = document.getElementById("userid").value;

    const errorFlag = [];

    // Check for lowercase
    if (!pwd.match(/[a-z]/)) {
        document.getElementById("msg1").innerHTML =
            "Enter at least 1 lowercase letter";
        errorFlag = 1;
    } else {
        document.getElementById("msg1").innerHTML = "";
    }

    // Check for capitals
    if (!pwd.match(/[A-Z]/)) {
        document.getElementById("msg2").innerHTML =
            "Enter at least 1 capital letter";
        errorFlag = 1;
    } else {
        document.getElementById("msg2").innerHTML = "";
    }

    // Check for numbers
    if (!pwd.match(/[0-9]/)) {
        document.getElementById("msg3").innerHTML = "Enter at least 1 number";
        errorFlag = 1;
    } else {
        document.getElementById("msg3").innerHTML = "";
    }

    // Check for Special Characters
    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        document.getElementById("msg4").innerHTML =
            "Enter at least 1 special character";
        errorFlag = 1;
    } else {
        document.getElementById("msg4").innerHTML = "";
    }

    // Check for Length
    if (pwd.length < 8) {
        document.getElementById("msg5").innerHTML =
            "Enter a minimum of 8 characters";
        errorFlag = 1;
    } else {
        document.getElementById("msg5").innerHTML = "";
    }

    // Check Password doesn't equal UserId
    if (pwd === user || pwd.includes(user)) {
        document.getElementById("msg6").innerHTML =
            "Password cannot equal User ID";
        errorFlag = 1;
    } else {
        document.getElementById("msg6").innerHTML = "";
    }

    // Display if errors else No display
    if (errorFlag === 0) {
        document.getElementById("msg7").innerHTML = "Valid Password";
    }
}

// Confirm Password //
function confirmPassword() {
    var pwd1 = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd2").value;

    if (pwd2 !== pwd1) {
        document.getElementById("pwd2-error").innerHTML =
            "Passwords do not match";
        return false;
    } else {
        document.getElementById("pwd2-error").innerHTML = "";
        return true;
    }
}

    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput +=
                            "<tr><td align='right'>" +
                            formcontent.elements[i].name +
                            "</td>";
                        formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput +=
                            "<tr><td align='right'>" +
                            formcontent.elements[i].name +
                            "</td>";
                        formoutput +=
                            "<td class='outputdata'>" +
                            formcontent.elements[i].value +
                            "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput +=
                        "<tr><td align='right'>" +
                        formcontent.elements[i].name +
                        "</td>";
                    formoutput +=
                        "<td class='outputdata'>" + 
                        formcontent.elements[i].value +
                        "</td></tr>";
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("output").innerHTML = formoutput;

// Review User Input //
function reviewInput() {
    var alertBox = document.getElementById("alert-box");
    var closeBtn = document.getElementById("close-alert");
    alert.Box.style.display = "block";
    closeBtn.onclick = function() {
          alertBox.style.display = "none";
     }};
 
     function validateAll() {
         let valid = true;
 
         if (!validateFname()) {
             valid = false;
         }
         if (!lnamevalidation()) {
             valid = false;
         }
         if (!emailValidation()) {
             valid = false;
         }
         if (!validateDob()) {
             valid = false;
         }
         if (!validateNumber()) {
             valid = false;
         }
         if (!validateAddress()) {
             valid = false;
         }
         if (!validateCity()) {
             valid = false;
         }
         if (!validateZip()) {
             valid = false;
         }
         if (!validateSSN()) {
             valid = false;
         }
         if (!validateUserId()) {
             valid = false;
         }
         if (!validatePassword()) {
             valid = false;
         }
         if (valid) {
           document.getElementById("submit").disabled = false;
         }else {
            showAlert();    
         }}
