$(document).ready(function() {

    // parse query string.
    var URL = window.location.search.substring(1);

    // Check if "email" part of the query string
    if (URL.search("email") != -1) {
        ParseURLParameter();
    }

    // call the function only if we on the thankYouPage.
    function ParseURLParameter() {
        var arrayParam = URL.split("&");
        for (var i = 0; i < arrayParam.length; i++) {
            var curParam = arrayParam[i].split("=");
            if (curParam[0] == "username") {
                $("#userName").text(curParam[1]);
            } else if (curParam[0] == "email") {
                $("#userEmail").text(decodeURIComponent(curParam[1]));
            }
        }
    }

    // validation that fname & lname is only letters.
    function validate() {
        var onlyLetters = /^[a-zA-Z\s]*$/;
        if (onlyLetters.test($("#fname").val()) && onlyLetters.test($("#lname").val())) {
            return true;
        }
        return false;
    }


    // Check dynamically that typing only letters
    $("#fname , #lname").keyup(function() {
        var name = $(this).val(); // value
        var resp = $(this).next(); // response element next to this input is p
        var onlyLetters = /^[a-zA-Z\s]*$/;
        if (onlyLetters.test(name)) {
            resp.text("");
        } else {
            resp.text($(this).prev().text() + " can only be a letters");
        }

    });

    //validate the password and sent to thankYouPage.
    $("form").submit(function() {
        event.preventDefault();
        var curPassword = $("#pword").val();
        var numCheck = /[0-9]/;
        var lowerWordCheck = /[a-z]/;
        var upperWordCheck = /[A-Z]/;
        if (!(numCheck.test(curPassword))) {
            alert("Password must contain at least one number (0-9)");
            $("#pword").focus();
            return false;
        }
        if (!(lowerWordCheck.test(curPassword))) {
            alert("Password must contain at least one lowercase letter");
            $("#pword").focus();
            return false;
        }
        if (!(upperWordCheck.test(curPassword))) {
            alert("Password must contain at least one uppercase letter");
            $("#pword").focus();
            return false;
        }
        if (validate()) {
            window.location.assign("ThanksYouPage.html?email=" + $("#email").val() + "&username=" + $("#uname").val());
        }
    });

});