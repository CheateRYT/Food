document.addEventListener('DOMContentLoaded', function() {

  //Tabs
  
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabParent = document.querySelector(".tabheader__items"),
    tabItemActive = 'tabheader__item_active';
  const hideTabContent = () => {
    tabsContent.forEach((item) => {
      item.classList.add("hide")
      item.classList.remove("show" , "fade")
    });
    tabs.forEach((item) => {
      item.classList.remove(tabItemActive);
    });
  };
  const showTabContent = (i = 0, callback) => {
    callback();
    tabsContent[i].classList.add("show" , "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(tabItemActive);
  };

  showTabContent(undefined, hideTabContent);

  tabParent.addEventListener('click', (event) => {

    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if(target  == item){
        showTabContent(i, hideTabContent);
        console.log(event)
      }
    })
    }

  });

  //Timer

  const deadLine = '2023-10-11';
 function getTimeRemaining(endtime) {
  let days,hours, minutes, seconds;
  const t = Date.parse(endtime) - Date.parse(new Date());
  if (t<= 0) {
    days = 0;
    hours = 0
    seconds = 0;
    minutes = 0;
  } else {
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    seconds = Math.floor((t / 1000) % 60);
  }
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

  function  getZero (num) {
    if (num >=0 && num <10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

 function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds');
    updateClock();
   function updateClock() {
    const t = getTimeRemaining(endtime);
     days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);
     if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
  const timeInterval = setInterval(updateClock, 1000);
}
 setClock('.timer', deadLine);
});