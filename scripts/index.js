let email = document.getElementById("email");
let submit = document.getElementById("submit");
let main = document.getElementsByTagName("main")[0];
let subscribing_page=document.getElementsByClassName("subscribing-page")[0];
let dismiss=document.getElementById("dismiss");
let inserted_email = document.getElementById("inserted-email");
submit.addEventListener("click", (e) => {

    main.classList.toggle("hidden");
    //alert(email.value + " has been subscribed to the newsletter");
    subscribing_page.classList.toggle("hidden");
    inserted_email.innerHTML = email.value;
    e.preventDefault();
});

dismiss.addEventListener("click", (e) => {
    main.classList.toggle("hidden");
    //alert(email.value + " has been subscribed to the newsletter");
    subscribing_page.classList.toggle("hidden");
    e.preventDefault();
})

