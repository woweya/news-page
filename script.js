var Opened =  document.getElementById('menu-open');
var Closed =  document.getElementById('menu-close');
function OpenNav()
{
    if (Opened.getAttribute('src') == "news-homepage-main/assets/images/icon-menu.svg"){
        document.getElementById('nav-mobile').style.width = '250px';
        document.getElementById('overlay').style.display = 'block'
    }
}
function CloseNav()
{
    if (Closed.getAttribute('src') == "news-homepage-main/assets/images/icon-menu-close.svg"){
        document.getElementById('nav-mobile').style.width = '0';
        document.getElementById('overlay').style.display = 'none'
    }   
}






