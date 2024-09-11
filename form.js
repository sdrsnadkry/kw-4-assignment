function submitValue() {
  const input = document.getElementById("name-input");
  const contactName = input.value
  
  const nameValue = document.getElementById("name-value")
  nameValue.innerText = contactName

  const popup  = document.getElementById("contact-popup")
  
  popup.setAttribute("class", "bg-[#00000050] absolute left-0 right-0 top-0 bottom-0")
  
  console.log(popup.classList)
}


function closePopUP(){
  const popup  = document.getElementById("contact-popup")
  popup.setAttribute("class", "bg-[#00000050] absolute left-0 right-0 top-0 bottom-0 hidden")


}