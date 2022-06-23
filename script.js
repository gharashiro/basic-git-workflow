// wait for windows to load
document.addEventListener("DOMContentLoaded", function(event) {
    //get reference to header object
    let myHeader = document.getElementById("header-id")

    // wait 3 econd, then display the header
    setTimeout(() => {
        myHeader.classList.remove("hiden");
    }, 3000)
});