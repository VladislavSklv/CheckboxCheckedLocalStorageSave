window.addEventListener("DOMContentLoaded", function(){
    let checkbox = document.querySelector('.rememberME');

    if(localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    };

    checkbox.addEventListener("click", function(){
        localStorage.setItem("isChecked", true);
    });
});