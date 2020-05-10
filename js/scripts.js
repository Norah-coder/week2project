var nameList = [
{
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday: "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame",
    Sunday: "Akosua",
},
{
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday: "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
} 
];
var weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

// validate the inputs
function validateInput(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementsByName("gender");
    var validForm =false;
    var i =0;

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(gender);

    if (day == "" || day == "null"){
        document.getElementById("inputErr").innerHTML = "Filed Required";
        return false;

    }else{
        if(!isNaN(day)){
            if(day<=0 || day>31){
                document.getElementById("inputErr").innerHTML = "Inavlid day";
                return false;
            }else{
                document.getElementById("inputErr").innerHTML = "Empty field";
                return false;
            }

        }

    }

    if (month == "" || month == "null"){
        document.getElementById("inputErr").innerHTML = "Filed Required";
        return false;

    }else{
        if(!isNaN(month)){
            if(month<=0 || month>31){
                document.getElementById("inputErr").innerHTML = "Inavlid month";
                return false;
            }else{
                document.getElementById("inputErr").innerHTML = "Empty field";
                return false;
            }

        }

    }
// validate year
    if (year == "" || year == "null"){
        document.getElementById("inputErr").innerHTML = "Filed Required";
        return false;

    }else{
        if(!isNaN(year)){
            if(year<=0 || year>2020){
                document.getElementById("inputErr").innerHTML = "Inavlid year";
                return false;
            }else{
                document.getElementById("inputErr").innerHTML = "Empty field";
                return false;
            }

        }

    }

    // check for gender

    while(!validForm && i<gender.length){
        if(gender[i].checked) validForm=true;
        var genderValue=gender[i].value;
        i++;
    
    }
    if(!validForm){
        document.getElementById("genderErr").innerHTML = "Select the gender";
        return false;

    }

    var userDetails ={
        myDay:day,
        myMonth:month,
        myYear:year,
        myGender:genderValue

    }
    console.log(userDetails)
   

    var details ={
        userDetails:userDetails,
        validForm:validForm
    }
};

// calculate the day of the week
function getDayOfWeek(){
    var userInput = validateInput();
    var userDetails = userInput.userDetails;

    mDate = userDetails.myDay;
    mMonth = userDetails.myMonth;
    mYear = userDetails.myYear;

    var a = Math.floor((14 - mMonth) /12);
    var y = myYear - a;
    var m = mMonth + 12 * a-2;

    dayOfWeek = Math.abs(mDate + y + Math.floor(y/4) - Math.floor(y/100) +  Math.floor(mYear/400) + Math.floor((31 *m)/12)) % 7;
    // return the day of the week
    var the_day = weekDays[dayOfWeek]

    return the_day;
};

function returnName(){
    var userInput = validateInput();
    var day = getDayOfWeek;

    userDetails = userInput.userDetails

    mDate = userDetails.myDay;
    mGender = userDetails.myGender;

    if(mGender === "male"){
        akanObj =nameList[0];
        for (var key in akanObj){
            if(akanObj.hasOwnProperty(key)){
                if(key == day){
                    akanName = akanObj(key)

                }
            }
        }


    }else if(mGender === "female"){
        akanObj =nameList[0];
        for (var key in akanObj){
            if(akanObj.hasOwnProperty(key)){
                if(key == day){
                    akanName = akanObj(key)

                }
            }
        }
    }
    return akanName;
};

function printName(){
    console.log(akanName)
    alert("Your Akan name is " + akanName);

};

function allFunctions(){
    var userInput = validateInput();
    isValid = userInput.validForm;
    if(!isValid){
        validateInput()
        return false; 
    }else{
        getDayOfWeek();
        returnName();
        printName();
        return false;
    }

};