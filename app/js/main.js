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


    function showList(i, title, firstName, secondName, thirdName, fourthName, firstImg, secondImg, thirdImg, fourthImg, firstData, secondData, thirdData, fourthData) {
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

            listItemBtn[0].setAttribute('data-id', firstData);
            listItemBtn[1].setAttribute('data-id', secondData);
            listItemBtn[2].setAttribute('data-id', thirdData);
            listItemBtn[3].setAttribute('data-id', fourthData);

            });

        offerTitle.addEventListener('click', () => {
            offerSelect.classList.remove('active');
            offerTable.classList.remove('deactive');
        });
    }

    let cart = {
        
            element1: {
                name: 'Intel Core i5 10500 3.1GHz',
                count: 0
            },
            element2: {
                name: 'Intel Core i7 10700 5GHz',
                count: 0
            },
            element3: {
                name: 'AMD Ryzen 9 5900X Box',
                count: 0
            },
            element4: {
                name: 'INTEL Core i7-8700 Box',
                count: 0
            },  
        
            element5: {
                name: 'Cougar Conquer 2 Pro Wirless',
                count: 0
            },
            element6: {
                name: 'Tecware Nexus M White',
                count: 0
            },
            element7: {
                name: 'Cooler Master MasterBox Q300L',
                count: 0
            },
            element8: {
                name: 'AZZA Onyx 2260W edition',
                count: 0
            },  
        
            element9: {
                name: 'ASUS ROG STRIX B550-F',
                count: 0
            },
            element10: {
                name: 'Gigabyte MR B450-AAA2B',
                count: 0
            },
            element11: {
                name: 'Gigabyte B450M Gaming',
                count: 0
            },
            element12: {
                name: 'Gigabyte GA-A320M-H',
                count: 0
            }, 
            element13: {
                name: 'Samsung 860 EVO 2.5", 1TB',
                count: 0
            },
            element14: {
                name: 'Kingston SSDNow A400 240GB',
                count: 0
            },
            element15: {
                name: 'SSD SAMSUNG T7 1TB Titan Grey',
                count: 0
            },
            element16: {
                name: 'SSD Kingston M.2E storage - 1TB',
                count: 0
            },
            element17: {
                name: 'ASUS ROG Strix 750W Gold PSU',
                count: 0
            },
            element18: {
                name: 'CHIEFTEC Power Smart 1450W',
                count: 0
            },
            element19: {
                name: 'be quiet! System Power B9 600W Bulk',
                count: 0
            },
            element20: {
                name: 'GameMax GM-400-8CM 400W',
                count: 0
            },      
            element21: {
                name: 'GeForce Gigabyte GDDR5 SDRAM',
                count: 0
            },
            element22: {
                name: 'Asus Radeon RX 6800 XT',
                count: 0
            },
            element23: {
                name: 'Gigabyte GeForce GTX 1080 WINDFORCE',
                count: 0
            },
            element24: {
                name: 'ASUS GeForce GTX1650 4GB',
                count: 0
            },        
            element25: {
                name: 'HyperX Predator DDR4 RGB',
                count: 0
            },
            element26: {
                name: 'HyperX DDR4-3200 8192MB PC4-25600',
                count: 0
            },
            element27: {
                name: 'Team TLZRD48G2666HC18H01',
                count: 0
            },
            element28: {
                name: 'DDR4 32GB Ripjaws V Red G.Skill',
                count: 0
            },        
            element29: {
                name: 'ARCTIC FREEZER 34 ESPORTS RED',
                count: 0
            },
            element30: {
                name: 'AMD Premium Wraith Prism Cooler',
                count: 0
            },
            element31: {
                name: 'be quiet! Pure Rock Slim',
                count: 0
            },
            element32: {
                name: 'Vinga CL3008B Ultra Slim',
                count: 0
            },        
            element33: {
                name: 'Seagate IronWolf Pro HDD 16TB',
                count: 0
            },
            element34: {
                name: 'Western Digital Blue 2TB',
                count: 0
            },
            element35: {
                name: 'Seagate IronWolf Pro HDD 16TB',
                count: 0
            },
            element36: {
                name: 'WD 3.5" SATA 3.0 18TB Gold',
                count: 0
            },
            element37: {
                name: 'Windows 10',
                count: 0
            },
            element38: {
                name: 'Windows 8',
                count: 0
            },
            element39: {
                name: 'Windows 7',
                count: 0
            },
            element40: {
                name: 'Windows XP',
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
           cart[id]['count']++; 

        for (let i = 1; i < 41; i++) {
                createList(cart[`element${i}`]['count'], cart[`element${i}`]['name']);
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
    showList(tableItemVideo, 'ВИДЕОКАРТА', 'GeForce Gigabyte GDDR5 SDRAM', 'Asus Radeon RX 6800 XT', 'Gigabyte GeForce GTX 1080 WINDFORCE', 'ASUS GeForce GTX1650 4GB', 'img/Graphic1.jpg', 'img/graphic2.jpg', 'img/graphic3.jpg', 'img/graphic4.jpg', 'element21', 'element22', 'element23', 'element24');
    showList(tableItemProc, 'Процессор', 'Intel Core i5 10500 3.1GHz','Intel Core i7 10700 5GHz', 'AMD Ryzen 9 5900X Box ', 'INTEL Core i7-8700 Box', 'img/Processor.png', 'img/proc2.jpg', 'img/proc3.jpg', 'img/proc4.jpg', "element1", 'element2', 'element3', 'element4');
    showList(tableItemKorpus, 'Корпус', 'Cougar Conquer 2 Pro Wirless', 'Tecware Nexus M White', 'Cooler Master MasterBox Q300L', 'AZZA Onyx 2260W edition', 'img/korpus.jpg', 'img/korpus2.jpg', 'img/korpus3.jpg', 'img/korpus4.jpg', "element5", 'element6', 'element7', 'element8');
    showList(tableItemMat, 'МАТПЛАТА', 'ASUS ROG STRIX B550-F', 'Gigabyte MR B450-AAA2B', 'Gigabyte B450M Gaming', 'Gigabyte GA-A320M-H', 'img/matplata.jpg', 'img/matplata2.jpg', 'img/matplata3.jpg', 'img/matplata4.jpg', "element9", 'element10', 'element11', 'element12');
    showList(tableItemSSD, 'SSD', 'Samsung 860 EVO 2.5", 1TB', 'Kingston SSDNow A400 240GB', 'SSD SAMSUNG T7 1TB Titan Grey', 'SSD Kingston M.2E storage - 1TB', 'img/SSD.jpg', 'img/SSD2.jpg', 'img/SSD3.jpg', 'img/SSD4.jpg', "element13", 'element14', 'element15', 'element16');
    showList(tableItemCharge, 'БЛОК ПИТАНИЯ', 'ASUS ROG Strix 750W Gold PSU', 'CHIEFTEC Power Smart 1450W', 'be quiet! System Power B9 600W Bulk', 'GameMax GM-400-8CM 400W',  'img/Block-Pitaniya.jpg', 'img/BP2.jpg', 'img/BP3.jpg', 'img/BP4.jpg', "element17", 'element18', 'element19', 'element20');
    showList(tableItemOzu, 'ОЗУ', 'HyperX Predator DDR4 RGB', 'HyperX DDR4-3200 8192MB PC4-25600', 'Team TLZRD48G2666HC18H01', 'DDR4 32GB Ripjaws V Red G.Skill', 'img/OZU.jpg', 'img/OZU2.jpg', 'img/OZU3.jpg', 'img/OZU4.jpg', "element25", 'element26', 'element27', 'element28');
    showList(tableItemOhlad, 'ОХЛАД', 'ARCTIC FREEZER 34 ESPORTS RED', 'AMD Premium Wraith Prism Cooler', 'be quiet! Pure Rock Slim', 'Vinga CL3008B Ultra Slim', 'img/Ohlad.jpg', 'img/ohlad2.jpg', 'img/ohlad3.jpg', 'img/ohlad4.jpg', "element29", 'element30', 'element31', 'element32');
    showList(tableItemHDD, 'HDD', ' Seagate BarraCuda HDD 2TB', ' Western Digital Blue 2TB', ' Seagate IronWolf Pro HDD 16TB', 'WD 3.5" SATA 3.0 18TB Gold' ,'img/HDD.jpg', 'img/HDD2.jpg', 'img/HDD3.jpg', 'img/HDD4.jpg', "element33", 'element34', 'element35', 'element36');
    showList(tableItemWind, 'WINDOWS', 'Windows 10', 'Windows 8', 'Windows 7', 'Windows XP', 'img/Windows.jpg', 'img/windows8.jpg', 'img/windows7.jpg', 'img/Windows4.jpg', "element37", 'element38', 'element39', 'element40');
    });