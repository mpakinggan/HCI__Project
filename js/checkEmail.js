function checkEmail() {
    var x = document.getElementById("email").value;
    var msg;
    if(x.indexOf('@') > -1 && (x.endsWith(".com") || x.endsWith(".edu"))) {
        msg = "Email successfully recorded.";
    } else {
        msg = "Invalid email address.";
    }
    document.getElementById("displayMessage").innerHTML = msg;
}