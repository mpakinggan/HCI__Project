function imageOn(id) {
    document.getElementById("imgoverlay").style.display = "block";
    document.getElementById("img").src = document.getElementById(id).src;
}
function videoOn(id) {
    document.getElementById("vidoverlay").style.display = "block";
    document.getElementById("vid").src = "https://www.youtube.com/embed/" + document.getElementById(id).getAttribute('data');
}
function off(id) {
    document.getElementById(id).style.display = "none";
}