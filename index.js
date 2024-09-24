const nav=document.getElementById("header");
const navOffset=nav.offsetTop;
window.addEventListener('scroll',()=>{
    if(window.scrollY>=navOffset){
        nav.classList.remove('sticky');

    }
    else{
        nav.classList.remove('sticky');
    }
})

date();
function date(){
    const now= new Date();
    const currentDate= now.toDateString();
    console.log(currentDate)
    document.getElementById("date").innerHTML=currentDate;
}


