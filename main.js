

//this function creates the venue info div and places it on the left side of the map area
function createVenue(array){
    //create the div object
    var venue = document.createElement("div");
    venue.className = "venue";
    venue.id = array.name;

    //image of venue's main entrance
    var entrance = document.createElement('img');
    entrance.src = "images/" + array.pic;
    entrance.alt = "Image of main entrance";

    //div with list of links to social networking sites with icons
    var social = document.createElement('div');
    social.id = "js_social-icons";

    var icons = document.createElement('ul');
    //this array holds the filenames for each logo, downloaded from http://www.iconfinder.com/search/?q=iconset%3Aumar
    var iconsImgs = {"Facebook":"fb.png",
                    "Twitter":"twitter.png",
                    "MySpace":"myspace.png",
                    "Yelp":"yelp.png"};

    //this function creates an image hyperlink
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

    //create a list item with an image hyperlink for each logo in iconsImgs and add to ul:"icons"
    for (icon in iconsImgs){
        socialSite = document.createElement('li');
        socialLink = imageLink(icon,array.socialSites[icon],iconsImgs[icon]);
        socialSite.appendChild(socialLink);
        icons.appendChild(socialSite);
    };

    social.appendChild(icons);

    //this function converts link text into a helpful description of the link
    function displayLink(thisDiv){
        linkText = thisDiv.childNodes[0].childNodes[0];                 //DOM object: TextNode (get the text of the <a> within this <div>)
        linkLabel = linkText.textContent;                               //the actual string

        var linkURL = linkText.parentNode.attributes[1].textContent;    //URL string
        if (linkURL.match("maps.google") != null){                      //for the address
            linkText.textContent = "Go to Google Maps";
        }

        else {                                                          //for the venue name
            linkText.textContent = linkURL.slice(11);
        }

        linkText.parentNode.style.fontStyle = "italic";                 //make it italic

    }
    //this function reverts link text back to original label
    function revertText(thisDiv){
        linkText.textContent = linkLabel;                               //reverts link text to label: name/address
        linkText.parentNode.style.fontStyle = "normal";                 //no italics
    }

    //name and link to website
    var titleDiv = document.createElement('div');
    titleDiv.id = "name";
    titleDiv.addEventListener("mouseover",function(){displayLink(this)},false);
    titleDiv.addEventListener("mouseout",function(){revertText(this)},false);

    var title = document.createElement('a');
    title.id = "js_venue-title";
    title.href = array.website;
    title.target = "_blank";
    title.textContent = array.name;
    titleDiv.appendChild(title);


    //address and link to google maps
    var addrDiv = document.createElement('div');
    addrDiv.id = "address";
    addrDiv.addEventListener("mouseover",function(){displayLink(this)},false);
    addrDiv.addEventListener("mouseout",function(){revertText(this)},false);

    var mapsLink = document.createElement('a');
    mapsLink.id = "js_gmaps";
    mapsLink.href = array.gmaps;
    mapsLink.target = "_blank";
    mapsLink.textContent = array.address;
    addrDiv.appendChild(mapsLink);

    //this function is for adding additional venue information, i.e. basic chunks of text
    function addInfo(type,text,id){
        var name = document.createElement(type);
        name.textContent = text;
        name.id = id;
        return name
    }

    var area = addInfo("p", "[" + array.area + "]", "area");
    var scene = addInfo("p", array.scene, "scene");
    var separator = addInfo("span", "||", "separator");
    var ages = addInfo("ages", array.ages, "ages");
    scene.appendChild(separator);
    scene.appendChild(ages);
    var boxOfc = addInfo("p", "Box Office: " + array.phone, "phone");
    var showEvents = addInfo("p", "Show upcoming events", "showEvents");

    //icon downloaded from http://www.iconarchive.com/show/build-icons-by-designkindle/Ticket-icon.html
    var tix = imageLink("Go to the ticket site",array.tixURL,"ticket.png");
    tix.id = "tix";

    //array for items to append to venue div
    venueItems = [entrance, social, titleDiv, addrDiv, area, scene, tix, boxOfc, showEvents]
    for (item in venueItems){
        venue.appendChild(venueItems[item])
    };

    document.getElementById('map-area').appendChild(venue);
}