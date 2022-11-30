function Header(){
    const elem = document.createElement('header');
    elem.classList.add('header');

    elem.innerHTML = `
            <div class="container">

                <div class="header__logo">
                    <img src="./crs/img/logo.png"/>
                </div>

                <nav class="header__nav">
                    <ul>
                        <li><div class="header__nav_home" href="/">Главная</div></li>
                        <li><div class="header__nav_product" href="/">Каталог</div></li>
                        <li><div class="header__nav_contact" href="/">Связь с нами</div></li>
                    </ul>
                </nav>

            </div>
        `;
    return elem;

}
export default Header();