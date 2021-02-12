window.addEventListener('DOMContentLoaded', () => {
    const tableItemProc = document.querySelector('.table-list__item--1'),
        tableItemKorpus = document.querySelector('.table-list__item--2'),
        tableItemMat = document.querySelector('.table-list__item--3'),
        tableItemSSD = document.querySelector('.table-list__item--4'),
        tableItemCharge = document.querySelector('.table-list__item--5'),
        tableItemVideo = document.querySelector('.table-list__item--6'),
        tableItemOzu = document.querySelector('.table-list__item--7'),
        tableItemOhlad = document.querySelector('.table-list__item--8'),
        tableItemHDD = document.querySelector('.table-list__item--9'),
        tableItemWind = document.querySelector('.table-list__item--10'),
        offerSelect = document.querySelector('.offer__select'),
        offerTable = document.querySelector('.offer__table'),
        listItem = document.querySelectorAll('.list__item'),
        offerTitle = document.querySelector('.offer__title'),
        listItemName = document.querySelectorAll('.list__item-title'),
        listItemImg = document.querySelectorAll('.list__item img'),
        price = document.querySelector('.list__item-price'),
        listItemBox = document.querySelectorAll('.list__item-box'),
        offerButton = document.querySelector('.offer__button'),
        listItemBtn = document.querySelectorAll('.list__item-button'),
        popupItemInner = document.querySelector('.popup__item-inner'),
        popup = document.querySelector('.popup'),
        closeBtn = document.querySelector('.popup__close-btn');


    function showList(i, title, firstName, secondName, thirdName, fourthName, firstImg, secondImg, thirdImg, fourthImg, data) {
        i.addEventListener('click', function () {
            offerSelect.classList.add('active');
            offerTable.classList.add('deactive');

            offerTitle.innerHTML = `<div class="offer__title">
        <h1> ${title}</h1>
      </div>`;

            listItemName[0].textContent = firstName;
            listItemName[1].textContent = secondName;
            listItemName[2].textContent = thirdName;
            listItemName[3].textContent = fourthName;

            
            // listItemImg.forEach((item) => {
            //     item.src = img;
            // });
            listItemImg[0].src = firstImg;
            listItemImg[1].src = secondImg;
            listItemImg[2].src = thirdImg;
            listItemImg[3].src = fourthImg;
            listItemBtn.forEach((item) => {
                item.setAttribute('data-id', data);
            });
        });

        offerTitle.addEventListener('click', () => {
            offerSelect.classList.remove('active');
            offerTable.classList.remove('deactive');
        });
    }

    let cart = {
        '1': {
            name: 'процессоров',
            count: 0
        },
        '2': {
            name: 'корпусов',
            count: 0
        },
        '3': {
            name: 'матплат',
            count: 0
        },
        '4': {
            name: 'SSD',
            count: 0
        },
        '5': {
            name: 'блоков питания',
            count: 0
        },
        '6': {
            name: 'видеокарт',
            count: 0
        },
        '7': {
            name: 'ОЗУ',
            count: 0
        },
        '8': {
            name: 'Охладов',
            count: 0
        },
        '9': {
            name: 'HDD',
            count: 0
        },
        '10': {
            name: 'WINDOWS',
            count: 0
        }
    };
    document.onclick = (event) => {
        const target = event.target;
        if (target.classList.contains('list__item-button')) {
            plusFunction(target.dataset.id);
        }
    };
    const plusFunction = (id) => {
        cart[id].count++;
        for (let i = 1; i < 11; i++) {
            createList(cart[i]['count'], cart[i]['name']);
        }
    };
    offerButton.addEventListener('click', () => {
        popup.classList.add('active-popup');
    });

    listItemBtn.forEach((item) => {
        item.addEventListener('click', () => {
            deleteList();
        });
    });

    function deleteList() {
        popupItemInner.innerHTML = "";
    }

    function createList(data, name) {
        if (data > 0) {
            popupItemInner.innerHTML += `<li class="list-completed">${data} ${name} по цене ${price.textContent} </li>`;
        }
    }
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active-popup');
    });
// (i, title, firstName, secondName, thirdName, fourthName, firstImg, secondImg, thirdImg, fouthImg, data)
    showList(tableItemVideo, 'ВИДЕОКАРТА', 'GeForce Gigabyte GDDR5 SDRAM', 'Asus Radeon RX 6800 XT', 'Gigabyte GeForce GTX 1080 WINDFORCE', 'ASUS GeForce GTX1650 4GB', 'img/Graphic1.jpg', 'img/graphic2.jpg', 'img/graphic3.jpg', 'img/graphic4.jpg', "6");
    showList(tableItemProc, 'Процессор', 'Intel Core i5 10500 3.1GHz','Intel Core i7 10700 5GHz', 'AMD Ryzen 9 5900X Box ', 'INTEL Core i7-8700 Box', 'img/Processor.png', 'img/proc2.jpg', 'img/proc3.jpg', 'img/proc4.jpg', "1");
    showList(tableItemKorpus, 'Корпус', 'Cougar Conquer 2 Pro Wirless', 'Tecware Nexus M White', 'Cooler Master MasterBox Q300L', 'AZZA Onyx 2260W edition', 'img/korpus.jpg', 'img/korpus2.jpg', 'img/korpus3.jpg', 'img/korpus4.jpg' ,"2");
    showList(tableItemMat, 'МАТПЛАТА', 'ASUS ROG STRIX B550-F', 'Gigabyte MR B450-AAA2B', 'Gigabyte B450M Gaming', 'Gigabyte GA-A320M-H', 'img/matplata.jpg', 'img/matplata2.jpg', 'img/matplata3.jpg', 'img/matplata4.jpg', "3");
    showList(tableItemSSD, 'SSD', 'Samsung 860 EVO 2.5", 1TB', 'Kingston SSDNow A400 240GB', 'SSD SAMSUNG T7 1TB Titan Grey', 'SSD Kingston M.2E storage - 1TB', 'img/SSD.jpg', 'img/SSD2.jpg', 'img/SSD3.jpg', 'img/SSD4.jpg', "4");
    showList(tableItemCharge, 'БЛОК ПИТАНИЯ', 'ASUS ROG Strix 750W Gold PSU', 'CHIEFTEC Power Smart 1450W', 'be quiet! System Power B9 600W Bulk', 'GameMax GM-400-8CM 400W',  'img/Block-Pitaniya.jpg', 'img/BP2.jpg', 'img/BP3.jpg', 'img/BP4.jpg', "5");
    showList(tableItemOzu, 'ОЗУ', 'HyperX Predator DDR4 RGB', 'HyperX DDR4-3200 8192MB PC4-25600', 'Team TLZRD48G2666HC18H01', 'DDR4 32GB Ripjaws V Red G.Skill', 'img/OZU.jpg', 'img/OZU2.jpg', 'img/OZU3.jpg', 'img/OZU4.jpg', "7");
    showList(tableItemOhlad, 'ОХЛАД', 'ARCTIC FREEZER 34 ESPORTS RED', 'AMD Premium Wraith Prism Cooler', 'be quiet! Pure Rock Slim', 'Vinga CL3008B Ultra Slim', 'img/Ohlad.jpg', 'img/ohlad2.jpg', 'img/ohlad3.jpg', 'img/ohlad4.jpg' ,"8");
    showList(tableItemHDD, 'HDD', ' Seagate BarraCuda HDD 2TB', ' Western Digital Blue 2TB', ' Seagate IronWolf Pro HDD 16TB', 'WD 3.5" SATA 3.0 18TB Gold' ,'img/HDD.jpg', 'img/HDD2.jpg', 'img/HDD3.jpg', 'img/HDD4.jpg', "9");
    showList(tableItemWind, 'WINDOWS', 'Windows 10', 'Windows 8', 'Windows 7', 'Windows XP', 'img/Windows.jpg', 'img/windows8.jpg', 'img/windows7.jpg', 'img/Windows4.jpg', "10");
    });