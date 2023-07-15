document.addEventListener('DOMContentLoaded', function() {
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
});