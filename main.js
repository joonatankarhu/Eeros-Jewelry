function validateForm() {
    let x = document.forms["order-form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}