let timer;
let totalMilliseconds = 0;
// fn to start the timer
function startStopwatch() {
    timer = setInterval(setTime, 10);
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('pauseButton').style.display = 'inline';
}
// fn to stop the timer
function stopStopwatch() {
    clearInterval(timer);
    document.getElementById('startButton').style.display = 'inline';
    document.getElementById('pauseButton').style.display = 'none';
}
// fn to reset the timer
function resetStopwatch() {
    clearInterval(timer);
    totalMilliseconds = 0;
    document.getElementById('display').innerText = '00:00:00.000';
    document.getElementById('startButton').style.display = 'inline';
    document.getElementById('pauseButton').style.display = 'none';
}
// fn to update the timer
function setTime() {
    ++totalMilliseconds;
    const milliseconds = totalMilliseconds % 100;
    const seconds = Math.floor(totalMilliseconds / 100) % 60;
    const minutes = Math.floor(totalMilliseconds / 6000) % 60;
    const hours = Math.floor(totalMilliseconds / 360000);

    document.getElementById('display').innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
}