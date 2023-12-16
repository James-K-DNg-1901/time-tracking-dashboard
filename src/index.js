const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const workHrs = document.getElementById('work-hrs');
const workPre = document.getElementById('work-pre');
const playHrs = document.getElementById('play-hrs');
const playPre = document.getElementById('play-pre');
const studyHrs = document.getElementById('study-hrs');
const studyPre = document.getElementById('study-pre');
const exerciseHrs = document.getElementById('exercise-hrs');
const exercisePre = document.getElementById('exercise-pre');
const socialHrs = document.getElementById('social-hrs');
const socialPre = document.getElementById('social-pre');
const selfCareHrs = document.getElementById('self-care-hrs');
const selfCarePre = document.getElementById('self-care-pre');


daily.addEventListener('click', function () { 
    weekly.classList.remove('text-white');
    weekly.classList.remove('text-md');
    monthly.classList.remove('text-white');
    monthly.classList.remove('text-md');
    daily.classList.add('text-white');
    daily.classList.add('text-md');
    workHrs.innerHTML = 5;
    workPre.innerHTML = 7;
    playHrs.innerHTML = 1;
    playPre.innerHTML = 2;
    studyHrs.innerHTML = 0;
    socialPre.innerHTML = 1;
    exerciseHrs.innerHTML = 1;
    exercisePre.innerHTML = 1;
    socialHrs.innerHTML = 1;
    socialPre.innerHTML = 3;
    selfCareHrs.innerHTML = 0;
    selfCarePre.innerHTML = 1;
});

weekly.addEventListener('click', function () {
    weekly.classList.add('text-white');
    weekly.classList.add('text-md');
    monthly.classList.remove('text-white');
    monthly.classList.remove('text-md');
    daily.classList.remove('text-white');
    daily.classList.remove('text-md');
    workHrs.innerHTML = 32;
    workPre.innerHTML = 36;
    playHrs.innerHTML = 10;
    playPre.innerHTML = 8;
    studyHrs.innerHTML = 4;
    socialPre.innerHTML = 7;
    exerciseHrs.innerHTML = 4;
    exercisePre.innerHTML = 5;
    socialHrs.innerHTML = 5;
    socialPre.innerHTML = 10;
    selfCareHrs.innerHTML = 2;
    selfCarePre.innerHTML = 2;
});

monthly.addEventListener('click', function () {
    weekly.classList.remove('text-white');
    weekly.classList.remove('text-md');
    daily.classList.remove('text-white');
    daily.classList.remove('text-md');
    monthly.classList.add('text-white');
    monthly.classList.add('text-md');
    workHrs.innerHTML = 103;
    workPre.innerHTML = 128;
    playHrs.innerHTML = 23;
    playPre.innerHTML = 29;
    studyHrs.innerHTML = 13;
    socialPre.innerHTML = 19;
    exerciseHrs.innerHTML = 11;
    exercisePre.innerHTML = 18;
    socialHrs.innerHTML = 21;
    socialPre.innerHTML = 23;
    selfCareHrs.innerHTML = 7;
    selfCarePre.innerHTML = 11;
});