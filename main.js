function currentTime () {
    const date = new Date();
    let hrs = date.getHours() + '';
    let min = date.getMinutes() + '';
    let sec = date.getSeconds() + '';
    // let ms = date.getMilliseconds() + '';
    let day = date.getDay();
    const month = date.getMonth();
    let amPm = '';

    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                    'October', 'November', 'December'];

    hrs = (hrs.length < 2) ? '0' + hrs : hrs;             
    min = (min.length < 2) ? '0' + min : min;             
    sec = (sec.length < 2) ? '0' + sec : sec;     
    amPm = hrs >= 12 ? 'PM' : 'AM';
    
    document.querySelector('.day').innerHTML = day;
    document.querySelector('.month').innerHTML = months[month];
    document.querySelector('.hrs').innerHTML = hrs;
    document.querySelector('.min').innerHTML = min;
    document.querySelector('.sec').innerHTML = sec;
    // document.querySelector('.ms').innerHTML = ms;

    setInterval(currentTime, 1000)
}

currentTime()