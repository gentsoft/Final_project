import Module from "../popapModule.js"

let content = ``;

let avaitInfo = function(){

    let translate = function(info){
        if(info == 'M'){ return 'мужская'};
        if(info == 'W'){ return 'женская'};
        if(info == 'ChM'){ return 'мальчику'};
        if(info == 'ChW'){ return 'девочке'};
        if(info == 'winter'){ return 'зима'};
        if(info == 'summer'){ return 'лето'};
        if(info == 'all-season'){ return 'круглосезонная'};
        if(info == 'autumn-spring'){ return 'осенне-весенняя'};
    };

let contentF = async function(){

    await fetch('https://gentsoft.github.io/FakIpi/crs/info.json')
    .then(res=>res.json())
    .then(json=>{
        let shoess = json.shoes;
        for(let i = 1; i <=33; i++){
            let contentPas = `
                <div class="main__Product__contnet">
                    <div class="main__Product__img">
                        <img src="${shoess[i].photoMini}" alt="#">                
                    </div>
                    <div class="main__Product__info">
                        <div class="main__Product__info_gender">
                            <span>Пол: </span><span>${translate(shoess[i].gender)}</span>
                        </div>
                        <div class="main__Product__info_season">
                            <span>Сезон: </span><span>${translate(shoess[i].season)}</span>
                        </div>  
                        <div class="main__Product__info_size">
                            <span>Размер: </span><span>${shoess[i].size}</span>
                        </div> 
                        <div class="main__Product__info_vendor">
                            <span>Инвентарный №: </span><span>${shoess[i].vendor}</span>
                        </div>
                        <div class="main__Product__info_price">
                            <span>Цена: </span><span>${shoess[i].price}</span>
                        </div>         
                    </div>
                
                </div>
            `;
            content = content + contentPas;
        }

    })
};
contentF()

}
avaitInfo()

function Product(){
    setTimeout(() => {
        Module('.main__Product__img','.main__product__popap__window')
    }, 100);
 return content
}

export default Product;
