/**
 * Created by JetBrains WebStorm.
 * User: Michael
 * Date: 3/2/12
 * Time: 11:46 PM
 * To change this template use File | Settings | File Templates.
 */


var logo = null;  //create object

function moveLogo(){
    logo.style.left = parseInt(logo.style.left)+1+'px'; //add 10px to left position
    console.log(logo.style.left);
    setTimeout(moveLogo,20);
}

function init(){
    logo = document.getElementById("logo");     //associate object with logo
    logo.style.left = '10px';                       //add initial value to DOM
    console.log(logo.style.left);
    moveLogo();
}


window.onload = init