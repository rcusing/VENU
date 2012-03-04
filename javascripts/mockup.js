/**
 * Created by JetBrains WebStorm.
 * User: Michael
 * Date: 3/3/12
 * Time: 11:17 PM
 * To change this template use File | Settings | File Templates.
 */

function displayLink(thisDiv){
    linkText = thisDiv.childNodes[1].childNodes[0];             //DOM object: TextNode (get the text of the <a> within this <div>)
    linkLabel = linkText.textContent;                           //the actual string

    linkURL = linkText.parentNode.attributes[0].textContent;    //URL string
    if (linkURL.match("maps.google") != null){                  //address --> google maps
        linkText.textContent = "Go to Google Maps";
    }

    else {                                                      //venue title --> site URL
        linkText.textContent = linkURL.slice(11);
    }

    linkText.parentNode.style.fontStyle = "italic";             //make it italic

}

function revertText(thisDiv){
    linkText.textContent = linkLabel;                           //reverts link text to label: title/address
    linkText.parentNode.style.fontStyle = "normal";             //no italics
}

//consolidate later, somehow...
function showSoma(){
    hideSomaLogo();
    document.getElementById('mockup_button1').style.width = '50px';     //keep button big
    document.getElementById('mockup_button1').style.height = '50px';
    isShown = document.getElementById('mockup_soma').style.display == 'block';

    if (isShown){
        document.getElementById('mockup_soma').style.display = 'none';
        document.getElementById('mockup_button1').style.width = '35px'; //back to little button
        document.getElementById('mockup_button1').style.height = '35px';
    }
    else {
        document.getElementById('mockup_soma').style.display = 'block';
    }

}

function showSomaLogo(){
    document.getElementById('soma-logo').style.display = 'block'

}

function hideSomaLogo(){
    document.getElementById('soma-logo').style.display = 'none'
}

function showHouseLogo(){
    document.getElementById('house-logo').style.display = 'block'

}

function hideHouseLogo(){
    document.getElementById('house-logo').style.display = 'none'
}