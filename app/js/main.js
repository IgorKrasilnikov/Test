'use strict';
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
        popup = document.querySelector('.popup');


    function showList(i, title, name, img, data) {
        i.addEventListener('click', function () {
            offerSelect.classList.add('active');
            offerTable.classList.add('deactive');

            offerTitle.innerHTML = `<div class="offer__title">
        <h1> ${title}</h1>
      </div>`;

            listItemName.forEach((item) => {
                item.textContent = name;
            });
            listItemImg.forEach((item) => {
                item.src = img;
            });
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
    };
    offerButton.addEventListener('click', () => {
        popup.classList.add('active-popup');
    });

    listItemBtn.forEach((item) => {
        item.addEventListener('click', function () {
            let createList =  (data, name) => {
                popupItemInner.innerHTML += `<li class="list-completed">${data} ${name} по цене ${price.textContent} </li>`;
            };
             for(let i = 0; i < 11; i++){
        createList(cart[i].count, cart[i].name);
    }
        });
    });
   
    
    showList(tableItemVideo, 'ВИДЕОКАРТА', 'GeForce Gigabyte GDDR5 SDRAM', 'img/Graphic.jpg', "6");
    showList(tableItemProc, 'Процессор', 'Intel Core i5 10500 3.1GHz', 'img/Processor.png', "1");
    showList(tableItemKorpus, 'Корпус', 'Cougar Conquer 2', 'img/korpus.jpg', "2");
    showList(tableItemMat, 'МАТПЛАТА', 'ASUS ROG STRIX B550-F', 'img/matplata.jpg', "3");
    showList(tableItemSSD, 'SSD', 'Samsung 860 EVO 2.5", 1TB', 'img/SSD.jpg', "4");
    showList(tableItemCharge, 'БЛОК ПИТАНИЯ', 'ASUS ROG Strix 750W Gold PSU', 'img/Block-Pitaniya.jpg', "5");
    showList(tableItemOzu, 'ОЗУ', 'HyperX Predator DDR4 RGB', 'img/OZU.jpg', "7");
    showList(tableItemOhlad, 'ОХЛАД', 'ARCTIC FREEZER 34 ESPORTS RED', 'img/Ohlad.jpg', "8");
    showList(tableItemHDD, 'HDD', ' Seagate BarraCuda HDD 2TB', 'img/HDD.jpg', "9");
    showList(tableItemWind, 'WINDOWS', 'Windows 10', 'img/Windows.jpg', "10");
});