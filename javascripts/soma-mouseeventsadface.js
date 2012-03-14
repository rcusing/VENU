/**
 * Created by JetBrains WebStorm.
 * User: Michael
 * Date: 3/9/12
 * Time: 8:47 PM
 * To change this template use File | Settings | File Templates.
 */
function js_displayLink(thisDiv){
    linkText = thisDiv.childNodes[0].childNodes[0];             //DOM object: TextNode (get the text of the <a> within this <div>)
    linkLabel = linkText.textContent;                           //the actual string

    linkURL = linkText.parentNode.attributes[1].textContent;    //URL string
    if (linkURL.match("maps.google") != null){                  //address --> google maps
        linkText.textContent = "Go to Google Maps";
    }

    else {                                                      //venue title --> site URL
        linkText.textContent = linkURL.slice(11);
    }

    linkText.parentNode.style.fontStyle = "italic";             //make it italic

}

function js_revertText(thisDiv){
    linkText.textContent = linkLabel;                           //reverts link text to label: title/address
    linkText.parentNode.style.fontStyle = "normal";             //no italics
}

function createSoma(x,y){

    soma = document.createElement("div");          /*create the div object for venue info*/
    soma.id = ("js_soma");                         /*associate with id for styling*/

    //positioning
    soma.style.left = screenX - x - 300 + 'px';
    soma.style.top = y-305 + 'px';


    //first object: image of soma's front door
    frontDoor = document.createElement('img');          /*create img object*/
    frontDoor.src = "images/soma.jpg";                  /*define img src*/
    frontDoor.alt = "Soma main entrance";               /*alt tag for the screenreaders*/
    soma.appendChild(frontDoor);                    /*add img to soma div*/

    social = document.createElement('div');
    social.id = "js_social-icons";

    icons = document.createElement('ul');
    fb = document.createElement('li');
    fbLink = document.createElement('a');
    fbLink.href = "http://www.facebook.com/somasd";
    fbLink.target = "_blank";
    fbLink.title = "Facebook";
    fbLogo = document.createElement('img');
    fbLogo.className = "icons";
    fbLogo.src = "images/fb.png";
    fbLogo.alt = "Go to Facebook page";
    fbLink.appendChild(fbLogo);
    fb.appendChild(fbLink);
    icons.appendChild(fb);

    twit = document.createElement('li');
    twitLink = document.createElement('a');
    twitLink.href = "http://www.twitter.com/somasd";
    twitLink.target = "_blank";
    twitLink.title = "Twitter";
    twitLogo = document.createElement('img');
    twitLogo.className = "icons";
    twitLogo.src = "images/twitter.png";
    twitLogo.alt = "Go to Twitter page";
    twitLink.appendChild(twitLogo);
    twit.appendChild(twitLink);

    icons.appendChild(twit);

    mySp = document.createElement('li');
    mySpLink = document.createElement('a');
    mySpLink.href = "http://www.myspace.com/somasd";
    mySpLink.target = "_blank";
    mySpLink.title = "MySpace";
    mySpLogo = document.createElement('img');
    mySpLogo.src = "images/myspace.png";
    mySpLogo.alt = "Go to MySpace page";
    mySpLogo.className = "icons";
    mySpLink.appendChild(mySpLogo);
    mySp.appendChild(mySpLink);

    icons.appendChild(mySp);

    yelp = document.createElement('li');
    yelpLink = document.createElement('a');
    yelpLink.href = "http://www.yelp.com/biz/soma-san-diego";
    yelpLink.target = "_blank";
    yelpLink.title = "Yelp";
    yelpLogo = document.createElement('img');
    yelpLogo.src = "images/yelp.png";
    yelpLogo.className = "icons";
    yelpLogo.alt = "Go to Yelp page";
    yelpLogo.style.width = "32px";
    yelpLogo.style.height = "32px";
    yelpLink.appendChild(yelpLogo);
    yelp.appendChild(yelpLink);

    icons.appendChild(yelp);

    social.appendChild(icons);

    soma.appendChild(social);



    //***NOTE TO SELF***
    //COMBINE THE NEXT TWO SETS OF JAVASCRIPT INTO ONE FUNCTION?

    //second object: name and link to website
    titleDiv = document.createElement('div');      /*create div for title*/
    titleDiv.addEventListener("mouseover",function(){js_displayLink(this)},false);
    titleDiv.addEventListener("mouseout",function(){js_revertText(this)},false);


    title = document.createElement('a');            /*create anchor object*/
    title.id = "js_venue-title";                       /*associate with id for styling*/
    title.href = "http://www.somasandiego.com";      /*add URL to venue website*/
    title.target = "_blank";                        /*open in new window*/
    title.textContent = "Soma";
    //name = document.createTextNode("Soma");
    //title.appendChild(name);

    titleDiv.appendChild(title);

    soma.appendChild(titleDiv);

    //address and link to google maps
    addrDiv = document.createElement('div');
    addrDiv.addEventListener("mouseover",function(){js_displayLink(this)},false);
    addrDiv.addEventListener("mouseout",function(){js_revertText(this)},false);

    mapsLink = document.createElement('a');
    mapsLink.id = "js_gmaps";
    mapsLink.href = "http://maps.google.com/maps/place?q=soma+san+diego&cid=14182757072775344695";
    mapsLink.target = "_blank";
    mapsLink.textContent = "3350 Sports Arena Boulevard";
    //addr = document.createTextNode("3350 Sports Arena Boulevard")
    //mapsLink.appendChild(addr);

    addrDiv.appendChild(mapsLink);

    soma.appendChild(addrDiv);

    //additional information
    area = document.createElement('p');
    area.textContent = "[Midway District]";
    area.className = "details";



    /*details = document.createElement('ul');
     details.id = "details";
     area = document.createElement('li');
     area.textContent = "[Midway District]"

     details.appendChild(area);*/

    soma.appendChild(area);

    scene = document.createElement('p');
    scene.textContent = "Hip Music Venue";
    scene.className = "details";
    separator = document.createElement('span');
    separator.textContent = "||";
    separator.style.paddingLeft = "10px";
    scene.appendChild(separator);

    ages = document.createElement('span');
    ages.textContent = "All ages";
    ages.id = "ages"
    scene.appendChild(ages);

    soma.appendChild(scene);

    //tix = document.createElement('p');
    tix = document.createElement('a');
    tix.className = "details";
    //tix.style.cssFloat = "left";
    tix.style.display = "inline";
    tix.title = "Go to the ticket site";
    tix.href = "https://tickets.somasandiego.com";
    tix.target = "_blank";
    //tixSite = document.createElement('a');
    //tixSite.title = "Go to the ticket site";
    //tixSite.href = "https://tickets.somasandiego.com";
    //tixSite.target = "_blank";
    tixLogo = document.createElement('img');
    tixLogo.src = "images/ticket.png";
    //tixSite.appendChild(tixLogo);
    tix.appendChild(tixLogo);
    //tix.appendChild(tixSite);

    //boxOfc = document.createTextNode('Box Office: 619.226.7662');
    //tix.appendChild(boxOfc);

    soma.appendChild(tix);

    boxOfc = document.createElement('p');
    boxOfc.id = "phone";
    boxOfc.textContent = "Box Office: 619.226.7662";
    //boxOfc.style.margin = "12px 0 5px 50px";

    soma.appendChild(boxOfc);

    showEvents = document.createElement('p');
    showEvents.id = "showEvents";
    showEvents.textContent = "Show upcoming events";

    soma.appendChild(showEvents);


    document.getElementById('map-area').appendChild(soma);
        console.log(soma.style.left, soma.style.top, x, y)

}

function showSoma(x,y){
    document.getElementById('mockup_button1').style.width = '50px';     //keep button big
    document.getElementById('mockup_button1').style.height = '50px';

    //venue info div does not exist
    if (document.getElementById('js_soma') == null){
        createSoma(x,y);
    }

    //click again to hide the venue div, without removing it
    else if (document.getElementById('js_soma').style.display == "block") {
        document.getElementById('js_soma').style.display = "none";
        document.getElementById('mockup_button1').style.width = '35px'; //back to little button
        document.getElementById('mockup_button1').style.height = '35px';
    }

    //click again to display the venue div
    else {
        document.getElementById('js_soma').style.display = "block";
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