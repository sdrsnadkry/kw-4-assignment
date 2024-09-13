function submitValue() {
  const input = document.getElementById("name-input");
  const contactName = input.value;

  const nameValue = document.getElementById("name-value");
  nameValue.innerText = contactName;

  const popup = document.getElementById("contact-popup");

  popup.setAttribute(
    "class",
    "bg-[#00000050] fixed left-0 top-0 w-full h-full"
  );

  console.log(popup.classList);
}

function closePopUP() {
  const popup = document.getElementById("contact-popup");
  popup.setAttribute(
    "class",
    "bg-[#00000050] fixed left-0 top-0 w-full h-full hidden"
  );
}

function stopA(event) {
  event.preventDefault();
}



function submitForm(event) {
  event.preventDefault();

  const form = document.forms[0];

  const email = form.email.value;

  const password = form.password.value;

  const cPassword = form["confirm-password"].value;

  if(cPassword !== password){
    alert("Password does not match")
  }

  console.log(email, password, cPassword);
}


function viewPassword(){
  const passwordInput = document.getElementById("pwd-input")

  passwordInput.setAttribute("type", "text")

  const spanTag = document.getElementById("eye-icon-span");
  spanTag.innerHTML = "<box-icon type='solid' name='bullseye'></box-icon>"

}


function hidePassword(){
  const passwordInput = document.getElementById("pwd-input")

  passwordInput.setAttribute("type", "password")

   const spanTag = document.getElementById("eye-icon-span");
  spanTag.innerHTML = "<box-icon name='low-vision'></box-icon>"

}