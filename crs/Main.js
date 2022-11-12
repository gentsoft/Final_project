import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";

function Main(){
    const elem = document.createElement('main');
    elem.classList.add('main');

    let butHome= document.querySelector('.header__nav_home'),
        butProduct= document.querySelector('.header__nav_product'),
        butContact= document.querySelector('.header__nav_contact');

    butHome.addEventListener('click', function(){
        let content = `
        <div class="container">                
            <div class="main__home">
                <div class="main__Home__img__slaider">
                    ${Home()}
                </div>
            </div>
        </div>
        `;
    elem.innerHTML = content;
    return elem;

    });
    
    let radioSize = function(){
        let contentFilterSize = ``;
        for(let i = 27; i < 48; i++){
            let contentFilterCalc = `<input type="radio" name="size" value="${i}">${i}<Br>`;
            contentFilterSize = contentFilterSize + contentFilterCalc;
        };
        return contentFilterSize;
    };

    let contentFilter = `
    <div class="main__Product__Filter">
        <div class="main__Product__Filter_Sl">
        каму:
        <div class="main__Product__Filter_gender">
            <input type="radio" name="gender" value="M"> M<Br>
            <input type="radio" name="gender" value="W"> W<Br>
            <input type="radio" name="gender" value="ChM"> M<Br>
            <input type="radio" name="gender" value="ChW"> W<Br>
        </div>
        </div> 
        <div class="main__Product__Filter_Sl">
        сезон:
        <div class="main__Product__Filter_season">
            <input type="radio" name="season" value="winter">winter<Br>
            <input type="radio" name="season" value="all-season">all-season<Br>
            <input type="radio" name="season" value="autumn-spring">autumn-spring<Br>
            <input type="radio" name="season" value="summer">summer<Br>   
        </div> 
        </div> 
        <div class="main__Product__Filter_Sl">
        размер:
        <div class="main__Product__Filter_size">
            ${radioSize()}
        </div>
        </div>
          
    </div>
    `;

    butProduct.addEventListener('click', function(){
        let content = `
            <div class="container">
                    ${contentFilter}
                <div class="main__product">
                    ${Product()}
                </div>
            </div>
            `;
        elem.innerHTML = content;
        return elem;
    });
    
    butContact.addEventListener('click', function(){
        let content = `
            <div class="container">
                <div class="main__contact">
                        ${Contact()}
                </div>
            </div>
            `;
        elem.innerHTML = content;
        return elem;
    });

    let content = `
            <div class="container">                
                <div class="main__home">
                    <div class="main__Home__img__slaider">
                        ${Home()}
                    </div>
                </div>
            </div>
        `;
    elem.innerHTML = content;
    return elem;

}


export default Main;