function checkStringFirstName() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    console.log(fname);
    console.log(lname);
    var onlyLetters = /^[a-zA-Z\s]*$/;

    if(onlyLetters.test(fname)) {
         document.getElementById("vali1").innerHTML = "";
    } else  {
         document.getElementById("vali1").innerHTML = "first name can only be a letters";
     }

    if(onlyLetters.test(lname)) {
        document.getElementById("vali2").innerHTML = "";
    } else {
        document.getElementById("vali2").innerHTML = "last name can only be a letters";
     }

    }



    function passwordCheck() {
        event.preventDefault();
        Pword = document.getElementById("pword").value;
        var numCheck = /[0-9]/;
        var lowerWordCheck = /[a-z]/;
        var upperWordCheck = /[A-Z]/;
        if(!(numCheck.test(Pword))) {
            alert("Password must contain at least one number (0-9)");
            document.getElementById("pword").focus();
            return false;
        }
        if (!(lowerWordCheck.test(Pword))) {
            alert("Password must contain at least one lowercase letter");
            document.getElementById("pword").focus();
            return false;
        }
        if(!(upperWordCheck.test(Pword))) {
            alert("Password must contain at least one uppercase letter");
            document.getElementById("pword").focus();
            return false;
        }
        var userName = document.getElementById("uname").value;
        var email = document.getElementById("email").value;
        window.location.assign("ThanksYouPage.html?email=" + email + "&username=" + userName);

        return true;
    }

    function ParseURLParameter() {

        var URL = window.location.search.substring(1);
        var arrayParam = URL.split("&");

        for(var i =0 ; arrayParam.length; i++) {
            var curParam = arrayParam[i].split("=");
            if(curParam[0] == "username") {
                document.getElementById("userName").innerHTML = curParam[1];
            } else if (curParam[0] == "email") {
                document.getElementById("userEmail").innerHTML = decodeURIComponent(curParam[1]);
            }
        }
    }

    function setCookie() {
    document.cookie = "userName=" + document.getElementById("uname").value;
    document.cookie = "email=" + document.getElementById("email").value;

        }


    function getCookie() {
    var array = document.cookie.split("; ");
    for(var i =0 ; i<array.length; i++) {
        var anotherArray = array[i].split("=");
        if(anotherArray[0] == "userName") {
            document.getElementById("userName").innerHTML = anotherArray[1];
        } else if(anotherArray[0] == "email") {
            document.getElementById("userEmail").innerHTML = anotherArray[1];
        }
    }

     }







