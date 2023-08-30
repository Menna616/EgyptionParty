

// HOME
let fixedBoxWidth = $('.fixed-box').outerWidth();
$('.sideBar').css('left',-fixedBoxWidth)

$('#closeBtn').click(function(){
    
    $('.sideBar').animate({left:`-${fixedBoxWidth}`},1000) 
})

$('.sideBar span').click(function(){
    $('.sideBar').animate({left:'0px'},1000) 
})

let counter = $('.counter').html();
$('textarea').keypress(function(){
 let x = counter--
$('.counter').html(`${x}`)
if(x<=0){
    $('.counter').html('your available character finished')
}
})

// COUNTER SECTION
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let endDate = new Date(2023,10,25,16,30);
// get time in milli seconds
let endTime = endDate.getTime();
function countDown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;

    // 60 seconds = 1000 milli seconds
    let oneMinute = 60 * 1000;

    // 1 hour = 60 minutes
    let oneHour = oneMinute * 60;

    // 1 day = 24 hours
    let oneDay = oneHour * 24;

    let addZeroes = num => num < 10 ? `0${num}` : num;

    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector('#details').innerHTML()=`<h1>CountDown had expired</h1>`
    }
    else{
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);
        let minutesLeft = Math.floor((remainingTime % oneHour) / oneMinute);
        let secondsLeft = Math.floor((remainingTime) % oneMinute / 1000);

        days.textContent = addZeroes(daysLeft);
        hours.textContent = addZeroes(hoursLeft);
        minutes.textContent = addZeroes(minutesLeft);
        seconds.textContent = addZeroes(secondsLeft);
    }

}

let i = setInterval(countDown,1000);

// nice scrolling 
$('.box a').click(function(e){
    let clickedLink = $(e.target).attr('href');
    console.log(clickedLink);
    let sectionOffset = $(clickedLink).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},2000)

})


   