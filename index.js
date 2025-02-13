// let seconds =0;
// let minutes = 0;
// let hours = 0;

// let  displaySeconds =0;
// let displayMinutes =0;
// let displayHours =0; 

// let status = 'Stopped';
// let interval = null ;

// function startWatch(){
//     seconds ++;
//     if(seconds/60===1){
//         seconds=0;
//         minutes++;

//         if(minutes/60 ===1){
//             minutes=0;
//             hours++;
//         }
//     }
// if(seconds < 10){
//     displaySeconds = '0' + seconds.toString();
// }
// else displaySeconds = seconds;

// if(minutes < 10){
//     displayMinutes = '0' + minutes.toString();
// }
// else{
//     displayMinutes = minutes
// }
// if(hours <10){
//     displayHours = '0' + hours.toString();
// }
// else{
//     displayHours = hours;
// }
    


//     document.getElementById('display').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds ; 
// }
// window.setInterval(startWatch,1000);


// function startStop(){
// if (statuss == 'Stopped'){
//    interval = window.setInterval(startWatch,1000);
//    document.getElementById('handler').innerHTML= 'Stop';
//    statuss = 'Started';
// }
// else if(statuss == 'Started'){
//     window.clearInterval(interval);
//     document.getElementById('handler').innerHTML = 'Start'
//     statuss = 'Stopped';
// }
// } 


// function Reset(){
//   seconds=0;
//   minutes=0
//   hours=0;

//   window.clearInterval(interval);
//   document.getElementById('Display').innerHTML = '00:00:00';
//   document.getElementById('handler').innerHTML = 'Stopped';
//   status = 'Stopped';
// }


let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = "00";
let displayMinutes = "00";
let displayHours = "00";

let status = "Stopped";
let interval = null;

function startWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format the time for display
    displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    displayHours = hours < 10 ? "0" + hours : hours;

    // Update the display
    document.getElementById("display").textContent =
        displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
    if (status === "Stopped") {
        interval = setInterval(startWatch, 1000);
        document.getElementById("handler").textContent = "Stop";
        status = "Started";
    } else {
        clearInterval(interval);
        document.getElementById("handler").textContent = "Start";
        status = "Stopped";
    }
}

function resetWatch() {
    // Reset time variables
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Stop the interval
    clearInterval(interval);

    // Reset the display
    document.getElementById("display").textContent = "00:00:00";

    // Update handler button and status
    document.getElementById("handler").textContent = "Start";
    status = "Stopped";
}
