const tabsBtns  = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');


tabsBtns.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('active') ) {
            tabsBtns.forEach( (item) => {
                item.classList.remove('active');
            });
    
            tabsItems.forEach( (item) => {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn:nth-child(3)').click();