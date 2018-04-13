$(document).ready(function () {


    var modal = $("#loginPop");
    var foto =$("#Photos-icon");
    var login = $("#loginbtn");
    var exit = $("span.close");
    var LoginedIn = false;
    var fotoUrlString = "";
    var submit = $("#submitbtn");
    var userBtn = $("#lb");
    var logOut = $("#logOutbtn");

    userBtn.click(function(){
        window.location="#"; //will be under construction page.
    })

    logOut.click(function(){
        window.location.reload();
    })

    exit.click(function(){
        document.getElementById('loginPop').style.display="none";
    });

    foto.click(openloginFoto);
    login.click(openlogin);

    function openlogin(){
        document.getElementById('loginPop').style.display="block";
        submit.click(confirmation);
    }

    function openloginFoto(){
        if(!LoginedIn){
            document.getElementById('loginPop').style.display="block";
            submit.click(confirmation);

        }
        else{
            window.location= fotoUrlString;
        }

    }
      
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
        }
    }


    function confirmation(event){
        
        var usernames=$("#username").val().toLowerCase();

        usernames = usernames.trim();
        var password=$("#psw").val()
        password = password.trim();

        var notNeeded;
        $.get("./PHP/login.php?usernames="+usernames+"&password="+password, notNeeded, function (response) {
            var myObj = JSON.parse(response);
            console.log(myObj.success)
            if (myObj.success){
                LoginedIn = true
                if(myObj.logins.username == "jane"){
                    alert("Welcome back Jane! We missed you")
                    fotoUrlString ="./Fotofan/fotofanJ.html";
                    document.getElementById('loginPop').style.display="none";
                    login.css("display", "none");
                    logOut.css("display", "block");
                    userBtn.css("display", "block");
                    return fotoUrlString;
                }
                else{
                    alert("Welcome back Joe! We missed you")
                    fotoUrlString="./Fotofan/fotofan.html";
                    login.css("display", "none");
                    logOut.css("display", "block");
                    userBtn.css("display", "block");
                    document.getElementById('loginPop').style.display="none";
                    return fotoUrlString;

                }
            }
            else {
                console.log("Not working");
                alert ("Username or Password not found...try again");
                $("#psw").val("");
                $("#username").val("");
            }

        });
    }
    function confirmationf(event){
        
        var usernames=$("#username").val().toLowerCase();

        usernames = usernames.trim();
        var password=$("#psw").val()
        password = password.trim();

        var notNeeded;
        console.log("Username: "+usernames);
        console.log("Password: "+password);
        $.get("php/login.php?usernames="+usernames+"&password="+password, notNeeded, function (response) {
            var myObj = JSON.parse(response);
            console.log(myObj.success)
            if (myObj.success){
                LoginedIn = true
                if(myObj.logins.username == "jane"){
                    alert("Welcome back Jane! We missed you")
                    window.location ="../Fotofan/fotofanJ.html"
                }
                else{
                    alert("Welcome back Joe! We missed you")
                    window.location="../Fotofan/fotofan.html";
                    document.getElementById('loginPop').style.display="none";

                }
            }
            else {
                console.log("Not working");
                alert ("Username or Password not found...try again");
                $("#psw").val("");
                $("#username").val("");
            }

        });
    }


/*=================================================================================================================*/
   var quoteArray= new Array(9);
    quoteArray[0] = "Don't cry because it's over, smile because it happened." ;
    quoteArray[1] = "Be yourself; everyone else is already taken.";
    quoteArray[2] = "If you think math is hard, try web design.";
    quoteArray[3] = "Websites promote you 24/7: No employee will do that.";
    quoteArray[4] = "Technology over technique produces emotionless design.";
    quoteArray[5] = "Digital design is like painting, except the paint never dries.";
    quoteArray[6] = "Design is as much an act of spacing as an act of marking.";
    quoteArray[7] = "If your words or images are not on point, making them dance in color won’t make them relevant.";
    quoteArray[8] = "It does not matter how slowly you go as long as you dont stop.";
    quoteArray[9] = "The secret of getting ahead is getting started." ;
    
    $("div.quote p").html("\""+quoteArray[rand(9)]+"\"");
    
    function rand (max) {
        var result;
        result = Math.floor (Math.random()*max);
        return result;  // there's that "return" statement again
    }
});
  
    
    










































