/**
 * Created by JetBrains WebStorm.
 * User: Michael
 * Date: 3/4/12
 * Time: 2:18 AM
 * To change this template use File | Settings | File Templates.
 */

//MY ORIGINAL FUNCTIONS FOR DISPLAYING LINK DESCRIPTION FOR VENUE TITLE AND ADDRESS
function gMaps(){
 addrText = document.getElementById('gmaps').childNodes[0];      //this refers to venue address
 addr = addrText.textContent;                                    //"saves" the venue address in addr
 addrText.textContent = "Go to Google Maps";                     //new text to display instead of address
 addrText.parentNode.style.fontStyle = "italic";                 //makes it italic
 el = addrText.parentNode.attributes[0].textContent;
 console.log(el.match("maps.google"));
 }

function showSite(){
 siteLink = document.getElementById('venue-title').childNodes[0];    //this refers to the venue name
 venueName = siteLink.textContent;                                   //"saves" the venue name to revert back later
 siteURL = siteLink.parentNode.attributes[0];     //this refers to the href attribute
 siteLink.textContent = siteURL.textContent.slice(11);               //returns URL without "http://www."
 siteLink.parentNode.style.fontStyle = "italic";                     //makes text italic

 }

//MY ORIGINAL FUNCTIONS FOR REVERTING TEXT BACK TO TITLE AND ADDRESS
function address(){
    addrText.textContent = addr;                                    //displays address again
    addrText.parentNode.style.fontStyle = "normal";                 //no italics
}

function showName(){
    siteLink.textContent = venueName;
    siteLink.parentNode.style.fontStyle = "normal";
}