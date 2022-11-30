import linksWork from "./links.js";

let Module = function (fElem,mainAlem) {
    if(!fElem)return;
    let elemPop = `)`;
    let arrElem = document.querySelectorAll(fElem);
    if(!arrElem)return;
    console.log(arrElem);
    for(let i = 0; i<arrElem.length; i++){
        arrElem[i].addEventListener("click",function() {
            fetch('https://gentsoft.github.io/FakIpi/crs/info.json')
            .then(res=>res.json())
            .then(json=>{
                let shoes = json.shoes;
                elemPop = `
                <div class="popap__window">
                    <div class="popap__window_img">
                        <img src="${shoes[i+1].photo}" alt="${i+1,'img'}">
                    </div>
                </div>`;
                let contentPop =  document.querySelector(mainAlem);
                contentPop.innerHTML = elemPop;
                linksWork(`ProductNamber:${shoes[i+1].vendor}`)
            })
            .then(function popap() {
                let popWin = document.querySelector('.popap__window');
                if(!popWin)return;
                popWin.addEventListener("click",function() {
                    popWin.remove();
                    linksWork('Product');
                })
                console.log('ура!')
            })

            console.log('hi',i+1)
        });   
    };
}

export default Module;

// Module('.image_cout','.root') - запуск модуля
//.image_cout - какие элементы искать(класс)
//.root - в каком элементе открывать попап(класс)
//fetch - загрузка из апи основного ресурса