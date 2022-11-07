import Contact from "pages/Contact.js";
import Home from "pages/Home.js";
import Product from "pages/Product.js";

function Main(){
    const elem = document.createElement('main');
    elem.classList.add('main');

    let butHome= document.querySelector('.header__nav_home'),
        butProduct= document.querySelector('.header__nav_product'),
        butContact= document.querySelector('.header__nav_contact');

        console.log('майн кнопки', butHome)


    butHome.addEventListener('click', function(){
        return elem;
    });

    butProduct.addEventListener('click', function(){
        let content = `
            <div class="container">
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