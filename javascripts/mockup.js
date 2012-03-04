/**
 * Created by JetBrains WebStorm.
 * User: Michael
 * Date: 3/3/12
 * Time: 11:17 PM
 * To change this template use File | Settings | File Templates.
 */

function gMaps(){
    linkText = document.getElementById('gmaps').childNodes[1].childNodes[0];
    addr = linkText.textContent;
    console.log(addr);
    linkText.textContent = "Go to Google Maps";
    console.log(linkText.textContent);
    linkText.parentNode.style.fontStyle = "italic";

}

function address(){
    linkText.textContent = addr;
    linkText.parentNode.style.fontStyle = "normal";
}

