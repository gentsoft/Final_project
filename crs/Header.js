function Header(){
    const elem = document.createElement('header');
    elem.classList.add('header');

    elem.innerHTML = `
            <div class="container">

                <div class="header__logo">
                    <a href="/"><img src="https://via.placeholder.com/100x40" /></a>
                </div>

                <nav class="header__nav">
                    <ul>
                        <li><div class="header__nav_home" href="/">Главная</div></li>
                        <li><div class="header__nav_product" href="/">Каталог</div></li>
                        <li><div class="header__nav_contact" href="/">Связь с нами</div></li>
                    </ul>
                </nav>

                <div class="header__save">
                <a href="/"><img src="https://via.placeholder.com/40x40" /></a>
                </div>

            </div>
        `;

    return elem;

}
console.log('метка 2');

export default Header();