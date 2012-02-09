new_work = new Object();
new_work.jobtitle = "";
new_work.employer = "";
new_work.city = "";
new_work.state = "";
new_work.country = "";
new_work.startmonth = "";
new_work.endmonth = "";
new_work.startyear = "";
new_work.endyear = "";
new_work.duty = "";

function vistoggle(default_hide, default_show, checked){
    if (checked)
    {
        document.getElementById(default_hide).style.display = "none";
        document.getElementById(default_show).style.display = "inline";
    }
    else
    {
        document.getElementById(default_hide).style.display = "inline";
        document.getElementById(default_show).style.display = "none";
    }
}

function noEmpty(){
    var jobtitle = document.new_work_form.jobtitle.value;    
    var employer = document.new_work_form.employer.value;    
    var city = document.new_work_form.city.value;
    var state = document.new_work_form.state.value;
    var country = document.new_work_form.country.value;
    var startmonth = document.new_work_form.startmonth.value;
    var startyear = document.new_work_form.startyear.value;
    var endmonth = document.new_work_form.endmonth.value;
    var endyear = document.new_work_form.endyear.value;
    var duty = document.new_work_form.duty.value;
    
    var noError = true;
    
    if (isEmpty(jobtitle))
    {
        document.new_work_form.jobtitle.style.borderColor = "red";
        noError = false;
    }
    if (isEmpty(employer))
    {
        document.new_work_form.employer.style.borderColor = "red";
        noError = false;
    }
    if (isEmpty(city))
    {
        document.new_work_form.city.style.borderColor = "red";
        noError = false;
    }
    if (isEmpty(state))
    {
        document.new_work_form.state.style.borderColor = "red";
        noError = false;
    }
    if (isEmpty(country) && !document.getElementById('isUS').checked)
    {
        document.new_work_form.country.style.borderColor = "red";
        noError = false;
    }
    if (startmonth == "default")
    {
        noError = false;
    }
    if (isEmpty(startyear) || isNaN(startyear))
    {
        document.new_work_form.startyear.style.borderColor = "red";
        noError = false;
    }
    if (endmonth == "default" && !document.getElementById('isCurrent').checked)
    {
        noError = false;
    }
    if ((isEmpty(endyear) || isNaN(endyear)) && !document.getElementById('isCurrent').checked)
    {
        document.new_work_form.endyear.style.borderColor = "red";
        noError = false;
    } 
    if (isEmpty(duty))
    {
        document.new_work_form.duty.style.borderColor = "red";
        noError = false;
    }
    
    console.log(noError);
    
    if (noError) {
        // store data in object
        new_work.jobtitle = jobtitle;
        new_work.employer = employer;
        new_work.city = city;
        new_work.state = state;
        new_work.country = country;
        new_work.startmonth = startmonth;
        new_work.endmonth = endmonth;
        new_work.startyear = startyear;
        new_work.endyear = endyear;
        new_work.duty = duty;
        
        // pass to function to display data
        generateWork(new_work);
    }
}

function generateWork(new_work) {
    document.getElementById('result').innerHTML =
    "<h4>" + new_work.jobtitle + "<br/>"
    + new_work.employer + "<br/>"
    + new_work.city + ", " + new_work.state + " " + new_work.country + "</h4>"
    + "<p>" + new_work.startmonth + ", " + new_work.startyear
    + " - " + new_work.endmonth + ", " + new_work.endyear  +"<br/><br/>"
    + "Duties:<br/>" + new_work.duty + "</p>";
}

function isEmpty(str) {
    if (str == "" || str == null)
    {
        return true;
    }
    else
    {
        return false;
    }
}