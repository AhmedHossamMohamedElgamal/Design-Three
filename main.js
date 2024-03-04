
let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let start = false;
let section_prog = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress-skills span");
window.onscroll = function(){
    //****increase number section */
    if(window.scrollY >= section.offsetTop){
        if(!start){
            nums.forEach((num)=>{
                increase(num)
            })
        }
        start = true;
    }
    /* end increase number section  */
    /* start increase progress width  */
     if(window.scrollY >= section_prog.offsetTop - 200){
         spans.forEach(function (el) {
          el.style.width = el.dataset.width;
      })
      }
    
   /*end increase progress width */
}
function increase(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(()=>{
        ele.textContent++;
        if(ele.textContent == goal){
            clearInterval(count)
        }
    },2000/goal)
}

////////////////////////---------------------------
/*** start count down */
let count = new Date("Dec 31 2024 11:59:59");
let x = setInterval(()=>{
    let dateNow = new Date();
    let diff = count - dateNow;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    let minutes =  Math.floor(diff % (1000 * 60 * 60 )/(1000 * 60 ));
    let seconds =  Math.floor(diff % (1000 * 60)/(1000));

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes < 10? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10? `0${seconds}`: seconds;
    if(diff < 0){
        clearInterval(x);
    }
})
/* end count down */


