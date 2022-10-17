const burger = document.getElementById('burger')
const aside_div = document.querySelector('.aside')
const CloseIcon = document.querySelector('#CloseIcon')

burger.addEventListener("click", ToggleBurger); 
function ToggleBurger() {
    if (aside_div.classList.contains("active")) {
        aside_div.classList.remove("active");
        } else {
            aside_div.classList.add("active");
        }
    }

    CloseIcon.addEventListener("click",ToggleBurger)

  



