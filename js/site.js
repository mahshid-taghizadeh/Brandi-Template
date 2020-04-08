function subscribe(){
  var sub_email = {
    email : document.getElementById("s_email").value,
  };
  console.log(sub_email);
}

function send_message() {
  var form_contact = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  };
  console.log(form_contact);
}