const signup_form=document.querySelector(".sign-up_form");
const signin_form=document.querySelector(".sign-in_form");
const open_signup=document.querySelector(".open_signup");
const open_signin=document.querySelector(".open_signin");

open_signin.addEventListener("click",()=>
{
    signin_form.classList.toggle("form_container");
    signin_form.classList.toggle("hide")
    signup_form.classList.toggle("form_container");
    signup_form.classList.toggle("hide")
})
open_signup.addEventListener("click",()=>
{
    signup_form.classList.toggle("form_container");
    signup_form.classList.toggle("hide")
    signin_form.classList.toggle("form_container");
    signin_form.classList.toggle("hide")
})

signin_form.addEventListener("submit",(e) =>
{
    e.preventDefault();
    let data = new FormData(e.target);
    let {email,password} = Object.fromEntries(data.entries());
    console.log(email,password);
    e.target.reset();
})
signup_form.addEventListener("submit",(e) =>
{
    e.preventDefault();
    let data = new FormData(e.target);
    let {name,email,password} = Object.fromEntries(data.entries());
    console.log(name,password);
    e.target.reset();
})

