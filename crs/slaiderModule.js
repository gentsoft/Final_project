let slaider = function (urlImj,sumImj) {
    let elem = ``;
    for(let i = 1; i <=sumImj; i++){
       let timeElem = `<img src="${urlImj}img_${i+``}.jpg" alt="#">`;
        elem = elem + timeElem;
    }

    let slaiderLisener = function(){

        let imageDoc= document.querySelectorAll('.slaiderMI_conteiner__window_img img');
        if(!imageDoc)return;
        let imageFirst = imageDoc[0];
        if(!imageDoc[0])return;
        imageDoc[0].remove();
        let imageBase = document.querySelector('.slaiderMI_conteiner__window_img');
        imageBase.append(imageFirst)

        setTimeout(() => {
            slaiderLisener();
        }, 7000);
    };
    
    setTimeout(() => {
        slaiderLisener();
    }, 1000);
    
elem = `<div class="slaiderMI_conteiner__img"><div class="slaiderMI_conteiner__window_img">`+ elem+`</div></div>`;
return elem;    
}

export default slaider;

//  slaider('./img/forSlider/',6,20)
//  './img/forSlider/' -- адрес изображений из HTML
//  6 -- ко-во изображений
//  img_1.jpg,img_2.jpg -- рекомендуемае имя и расширение