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


function createVenueInfo(array){

    newDiv = document.createElement("div");          /*create the div object for venue info*/
    newDiv.id = ("venue");                         /*associate with id for styling*/

    //first object: image of venue's front door
    frontDoor = document.createElement('img');          /*create img object*/
    frontDoor.src = "images/" + array.pic;                  /*define img src*/
    frontDoor.alt = "Image of main entrance";               /*alt tag for the screenreaders*/
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


    document.getElementById('soma').appendChild(soma);

}


soma = {name:"Soma",
    address:"3350 Sports Arena Boulevard",
    pic:"soma.jpg",
    website:"http://www.somasandiego.com",
    gmaps:"http://maps.google.com/maps/place?q=soma+san+diego&cid=14182757072775344695",
    socialSites:{
    "Facebook":"http://www.facebook.com/somasd",
    "Twitter":"http://www.twitter.com/somasd",
    "MySpace":"http://www.myspace.com/somasd",
    "Yelp":"http://www.yelp.com/biz/soma-san-diego"},
area:"Midway District",
scene:"Hip Music Venue",
ages:"All ages",
tixURL:"https://tickets.somasandiego.com",
phone:"619.226.7662"

};

function createVenue(array){
    venue = document.createElement("div");          //create the div object for venue info
    venue.className = "venue";                                //associate with id for styling
    venue.id = array.name;

    //image of venue's main entrance
    entrance = document.createElement('img');              //add new img object to the DOM
    entrance.src = "images/" + array.pic;                  //get filename from array
    entrance.alt = "Image of main entrance";               //for screenreaders



    //list of links to social networking sites with icons
    social = document.createElement('div');     //create new div for social networking site icons
    social.id = "js_social-icons";              //styling

    icons = document.createElement('ul');
    iconsImgs = {"Facebook":"fb.png",
    "Twitter":"twitter.png",
    "MySpace":"myspace.png",
    "Yelp":"yelp.png"};

function imageLink(desc,URL,imgSrc){
    var link = document.createElement('a');
    link.title = desc;
    link.href = URL;
    link.target = "_blank";

    var logo = document.createElement('img');
    logo.src = "images/" + imgSrc;
    link.appendChild(logo);

    return link
    }

//create the four list items
for (icon in iconsImgs){

    socialLink = imageLink(icon,array.socialSites[icon],iconsImgs[icon]);

    //create list item
    socialSite = document.createElement('li');     //creates list item
    socialSite.appendChild(socialLink);            //puts logo link into list item

    icons.appendChild(socialSite);       //add list item to ul:"icons"
    };

social.appendChild(icons);

//name and link to website
titleDiv = document.createElement('div');      /*create div for title*/
    titleDiv.id="name";
titleDiv.addEventListener("mouseover",function(){js_displayLink(this)},false);
titleDiv.addEventListener("mouseout",function(){js_revertText(this)},false);

title = document.createElement('a');            /*create anchor object*/
title.id = "js_venue-title";                       /*associate with id for styling*/
title.href = array.website;         //add URL to venue website
title.target = "_blank";                        /*open in new window*/
title.textContent = array.name;
titleDiv.appendChild(title);


//address and link to google maps
addrDiv = document.createElement('div');
    addrDiv.id = "address";
addrDiv.addEventListener("mouseover",function(){js_displayLink(this)},false);
addrDiv.addEventListener("mouseout",function(){js_revertText(this)},false);

mapsLink = document.createElement('a');
mapsLink.id = "js_gmaps";
mapsLink.href = array.gmaps;
mapsLink.target = "_blank";
mapsLink.textContent = array.address;
addrDiv.appendChild(mapsLink);

//additional information
function addInfo(type,text,id){
    var name = document.createElement(type);
    name.textContent = text;
    name.id = id;
    return name
    }


area = addInfo("p", "[" + array.area + "]", "area");
scene = addInfo("p", array.scene, "scene");
separator = addInfo("span", "||", "separator");
ages = addInfo("ages", array.ages, "ages");
scene.appendChild(separator);
scene.appendChild(ages);
boxOfc = addInfo("p", "Box Office: " + array.phone, "phone");
showEvents = addInfo("p", "Show upcoming events", "showEvents");

function imageLink(desc,URL,imgSrc){
    var link = document.createElement('a');
    link.title = desc;
    link.href = URL;
    link.target = "_blank";

    var logo = document.createElement('img');
    logo.src = "images/" + imgSrc;
    link.appendChild(logo);

    return link
    }

tix = imageLink("Go to the ticket site",array.tixURL,"ticket.png");
tix.id = "tix";


//array for items to append to venue div
venueItems = [entrance, social, titleDiv, addrDiv, area, scene, tix, boxOfc, showEvents]
for (item in venueItems){
    venue.appendChild(venueItems[item])
    };

document.getElementById('map-area').appendChild(venue);
console.log(venueItems);

}


function hooray(id) {
    /*var venue = null;
    if (venue != null || venue.style.display == "block"){
        venue.style.display = "none";
    }
    else if (venue != null || venue.style.display == "none"){
        venue.style.display = "block";
    }
    else if (venue == null){*/
        createVenue(soma);
        venue = document.getElementById(id)
    //}

}



