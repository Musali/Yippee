$(document).ready(function(){

	 	$.ajaxSetup({
   			async: false
 		});

        var myObj;
        var notNeeded;
        var ourData;

        $.getJSON("http://cs.wheatoncollege.edu/~mali/JSONdata.json", function(response){
	        	ourData = response;
	        	console.log("here: " + ourData.info);
        });
	console.log("right before all");	
	var num = all(); //print out all images at start of page
		
		
	var slidePic = $(".slider"); //variables to be used later
	lclick = $(".leftClick");
	rclick = $(".rightClick");
	var elemId ="";
	var img = $(".myImg");
	//var picContent = $(".pic-content"); 
	var caption= $(".caption");

	lclick.on("click",prevPic); //prev click function below
	rclick.on("click",nextPic); // next click function below
	
	var exit =$(".close"); //exit function

//============================================
//click on image, it goes into slide show mode
//============================================
	imgClass = document.querySelectorAll(".myImg"); //get all the nodes containing my image

	$("#imgContainer1").on("click",".myImg",function(){  //function that blows up image when clicked
		imgClass = document.querySelectorAll(".myImg"); //get all the nodes containing my image
		lclick.css("display","block");
		rclick.css("display","block");
		elemId = $(this).attr("id");
		//var slideids = document.querySelectorAll("#pic-content");
		for(var i = 0; i<imgClass.length; i++){
			if (elemId == "pic"+i) {
				$(".pic-content").css("display","none");
				$(".caption").empty();
				$("#picContent"+i).css("display","block");
				$(".slider").css("display","block");
				$("#picContent"+i).attr("src",this.src);
				$(".caption").html($("#picContent"+i).attr("alt"));
				var ctr = 0;
				var ctr2 = i;
				for(var k = 0;k < 6; k++) {
					var source = $("#picContent"+ctr2).attr("src");

					if (ctr2 == imgClass.length-1){
						ctr2 = -1;
					}
					$("#thum"+ctr).attr("src",source);
					ctr++;
					ctr2++;
				}
			}
		}
	});

//exit X function....
	exit.click(function(){
		slidePic.css("display","none");
	});

//=================================================
//				Arrow click functions
//=================================================

//Arrow to click on previous picture
	function prevPic(){
		for (var i = 0; i < imgClass.length; i++) {
			if (elemId == "pic"+0 || elemId === 0){
				$("#picContent"+i).css("display","none");
				$(".caption").empty();
				elemId= imgClass.length -1;
				$("#picContent"+ elemId).css("display","block");
				$(".caption").html($("#picContent"+elemId).attr("alt"));
				var ctr = 0;
				var ctr2 = elemId;

				for (var k = elemId; k < elemId+6; k++) {
					var source = $("#picContent"+ctr2).attr("src");
					if (ctr2 === 0)
					{
						ctr2 = imgClass.length;
					}
					$("#thum"+ctr).attr("src",source);
					ctr++;
					ctr2--;
				}
				break;
			}
				//$(".").attr("src", $("#pic"+elemId).src);
				// caption.html($("#pic").alt); WE HAVE TO DO THIS LAST MAYBE
			if (elemId == i || elemId == "pic"+ i) {
				$("#picContent"+i).css("display","none");
				$(".caption").empty();
				elemId = i-1;
				$("#picContent"+ elemId).css("display","block");
				$(".caption").html($("#picContent"+elemId).attr("alt"));
				$("#picContent").attr("src",$("#picContent"+elemId).src);
				// caption.html($("#pic").alt); WE HAVE TO DO THIS LAST MAYBE
				if (elemId == -1)
				{
					elemId++;
				}
				var theCounter = 0;
				var theCounter2 = elemId;
				for (var r = elemId; r < elemId+6; r++) {
					var Source = $("#picContent"+theCounter2).attr("src");
					if (theCounter2 === 0)
					{
						theCounter2 = imgClass.length;
					}
					$("#thum"+theCounter).attr("src",Source);
					theCounter++;
					theCounter2--;
				}
				break;
			}
		}
	}

//arrow to click on next pictures
	function nextPic(){
		for (var i = 0; i < imgClass.length; i++) {
			if (elemId == "pic"+imgClass.length-1 || elemId == imgClass.length-1){
				$("#picContent"+(imgClass.length-1)).css("display","none");
				$(".caption").empty();
				$("#picContent"+i).css("display","none");
				elemId = 0;
				$("#picContent"+ elemId).css("display","block");
				$(".caption").html($("#picContent"+elemId).attr("alt"));
				var ctr = 0;
				var ctr2 = elemId;
				for (var k = elemId; k < elemId+6; k++) {
				var source = $("#picContent"+ctr2).attr("src");
					if (ctr2 == imgClass.length-1){
						ctr2 = -1;
					}
					$("#thum"+ctr).attr("src",source);
					ctr++;
					ctr2++;
				}
				// caption.html($("#pic").alt); WE HAVE TO DO THIS LAST MAYBE
				break;
			}
			if (elemId == i || elemId == "pic"+i) {
				$("#picContent"+i).css("display","none");
				$(".caption").empty();
				elemId = i+1;
				$("#picContent"+ elemId).css("display","block");
				$(".caption").html($("#picContent"+elemId).attr("alt"));
				$("#picContent").attr("src",$("#picContent"+elemId).src);

				// caption.html($("#pic").alt); WE HAVE TO DO THIS LAST MAYBE
				if (elemId >= imgClass.length) {$("#picContent"+i).css("display","none"); elemId = 0;}
				 var counter = 0;
				 var counter2= elemId;
				for (var z = elemId; z < elemId+6; z++)
				{
					var theSource = $("#picContent"+counter2).attr("src");
					if (counter2 == imgClass.length-1){
						counter2 = -1;
					}
					$("#thum"+counter).attr("src",theSource);
					counter++;
					counter2++;
				}
				break;
			}
		}
	}
$("body").scroll( function(){
	var y = $(this).scrollTop();
	var button = $('#footlogo');

	if (y< button)
	$('#bigPic1').css('position', 'fixed');
}); 
	
//=================================================
//				Search Function.
//=================================================
$('#UnitedStates').click(UnitedStatefunction);
	function UnitedStatefunction() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('United States'); 
	}
$('#Germany').click(Germanyfunction);
	function Germanyfunction() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('Germany'); 
	}
$('#England').click(Englandfunction);
	function Englandfunction() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('England'); 
	}
$('.year2017').click(function2017);
	function function2017() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2017'); 
	}
$('.year2016').click(function2016);
	function function2016() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2016'); 
	}
	$('.year2013').click(function2013);
	function function2013() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2013'); 
	}
	$('.year2015').click(function2015);
	function function2015() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2015'); 
	}
	$('.year2012').click(function2012);
	function function2012() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2012'); 
	}
	$('.year2010').click(function2010);
	function function2010() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2017'); 
	}
	$('.year2008').click(function2008);
	function function2008() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2008'); 
	}
	$('.year2007').click(function2007);
	function function2007() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2007'); 
	}
	$('.year2005').click(function2005);
	function function2005() {
		$('.Germany').remove();
		$('.England').remove();
		$('.UnitedStates').remove();
		findSearch('2005'); 
	}
	
	
//go to search function, key press and click.
$("#search").keypress(findSearch0);
$("#srchImg").click(findSearch);

//=====================================
//			year clicks
//=====================================
$("#year2017").click(function(){
	findSearch("2017");
});
$("#year2016").click(function(){
	findSearch("2016");
});
$("#year2015").click(function(){
	findSearch("2015");
});
$("#year2013").click(function(){
	findSearch("2013");
});
$("#year2012").click(function(){
	findSearch("2012");
});
$("#year2010").click(function(){
	findSearch("2010");
});
$("#year2008").click(function(){
	findSearch("2008");
});
$("#year2007").click(function(){
	findSearch("2007");
});
$("#year2005").click(function(){
	findSearch("2005");
});
//=====================================
//			country clicks
//=====================================
$("#countryEng").click(function(){
	findSearch("England");
});
$("#countryGer").click(function(){
	findSearch("Germany");
});
$("#countrySpa").click(function(){
	findSearch("Spain");
});
$("#countryUS").click(function(){
	findSearch("United States");
});
//=====================================
//			State clicks
//=====================================
$("#stateWY").click(function(){
	findSearch("WY");
});
$("#stateCO").click(function(){
	findSearch("CO");
});
$("#stateFL").click(function(){
	findSearch("FL");
});
$("#stateNH").click(function(){
	findSearch("NH");
});
$("#stateNM").click(function(){
	findSearch("NM");
});
$("#stateMA").click(function(){
	findSearch("MA");
});
$("#stateVM").click(function(){
	findSearch("VM");
});
//Search functions
		function findSearch0(e){
                if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
                	findSearch();
 				}
 			}
		function findSearch(sVal){
					$('<br>').remove();
					console.log(sVal);
			        var search_value = $("#search").val();
					
					if (search_value === ""){
						if (sVal =='Germany'){
							search_value = "Germany";
						}
						else if (sVal == 'United States' || sVal =="US" || sVal =="USA" ){
							search_value = 'United States';
							console.log(search_value)
						}
						else if (sVal == 'England' || sVal ==  "UK"){
							search_value = 'UK';
							console.log(search_value)
						}
						else if (sVal == '2017'){
							search_value = '2017';
							console.log(search_value)
						}
						else if (sVal == '2016'){
							search_value = '2016';
						}
						else if (sVal == '2015'){
							search_value = '2015';
						}
						else if (sVal == '2013'){
							search_value = '2013';
							console.log(search_value)
						}
						else if (sVal == '2012'){
							search_value = '2012';
						}
						else if (sVal == '2010'){
							search_value = '2010';
						}
						else if (sVal == '2008'){
							search_value = '2008';
						}
						else if (sVal == '2007'){
							search_value = '2007';
						}
						else if (sVal == '2005'){
							search_value = '2005';
						}
						else if (sVal == "Germany"){
							search_value = "Germany"
						}
						else if (sVal == "Spain"){
							search_value = "Spain"
						}
						else if (sVal == "MA"|| sVal=="Massachussets"){
							search_value = "MA"
							console.log(search_value)
						}
						else if (sVal == "VM" || sVal=="Vermount"){
							search_value = "VT"
						}
						else if (sVal == "FL"|| sVal=="Florida"){
							search_value = "FL"
						}
						else if (sVal == "CO"|| sVal== "Colorado"){
							search_value = "CO"
						}
						else if (sVal == "NH" || sVal=="New Hampshire"){
							search_value = "NH"
						}
						else if (sVal == "WY" || sVal =="Wyoming"){
							search_value = "WY"
						}
						else if (sVal == "NM" || sVal =="New Mexico"){
							search_value = "NM"
						}						
					}
					else 
						{
							search_value = $("#search").val();
						}
               		var found_images = []; 
               		var found_des = []
					var j = 0;
                    for (var i = 0; i < ourData.info.length; i++)
                    {	
                        if (search_value === ourData.info[i].year){
                            found_images[j] = ourData.info[i].name;
                            found_des[j] = ourData.info[i].description;
							 j++; 
                        }
                        else if(search_value === ourData.info[i].country){
                           found_images[j] = ourData.info[i].name;
                           found_des[j] = ourData.info[i].description;
						    j++; 
                            //console.log(found_images[i]);	
                         }
                         else if(search_value == ourData.info[i].state){
                         	found_images[j] = ourData.info[i].name;
                         	found_des[j] = ourData.info[i].description;
                         	j++
                         }
                         else if(search_value == ourData.info[i].description){
                         	found_images[j] = ourData.info[i].name;
                         	found_des[j] = ourData.info[i].description;
                         	j++
                         }
                         else if(search_value == ourData.info[i].place){
                         	found_images[j] = ourData.info[i].name;
                         	found_des[j] = ourData.info[i].description;
                         }
                         else if(search_value == ourData.info[i].location){
                         	found_images[j] = ourData.info[i].name;
                         	found_des[j] = ourData.info[i].description;
                         	j++
                         }
						
                    }
					if(found_images.length === 0){
						alert("There is no match for you search.");
						
					}
					else {
						$(".myImg").remove();
						$(".pic-content").remove();
						$(".thumbnail").remove();
						$("#bigPic1").remove();
						  //console.log( "thie is the length " + found_images.length);
						for (var k=0; k < found_images.length; k++){	
							var imgHtml="";
							var sliderHtml = ""; 
							imgHtml += "<img class=\"myImg\" id=\"pic" + k +"\" src=\"#\">"; 
							sliderHtml+="<img class=\"pic-content\"id=\"picContent"+k+"\" src=\"#\" style=\"display:none;\"alt=\"\">";
							$("#imgContainer1").append(imgHtml); //add to img class
							$("#slider").append(sliderHtml);
							var source = found_images[k];
							var alt = found_des[k];
							$("#pic"+ k).attr("src",source); //add to img
							$("#picContent"+k).attr("src",source); //add to slider
							$("#picContent"+k).attr("alt",alt)
						}
						var bigPicHtml = "<img id=\"bigPic1\" src=\"#\">";
						$("#imgContainer0").append(bigPicHtml);
						bigPicSrc = $("#pic0").attr("src");
						$("#bigPic1").attr("src",bigPicSrc);
						for (var j = 0; j < 6; j++){

							var thumbnailHtml ="<img class=\"thumbnail\" id=\"thum"+j+"\"src=\"#\">";
							$(".thumbnails").append(thumbnailHtml);

							if("thum"+j != "thum0"){
								$("#thum"+j).css("opacity", "0.6");
							}
							$("#thum"+j).attr("src",$("#pic"+j).attr("src"))
						}
				}
			}
//====================================================
// homepage slideshow
//=====================================================

//==========================================
//	Some button clicks
//==========================================
    var logOut = $("#logOutbtn");
	var userBtn = $("#lb");

    logOut.click(function(){
    	window.location = "../index.html"; //GO BACK TO THE SPLASH PAGE 
    });
    userBtn.click(function(){
    	window.location = "#"; //REMEMBER TO ADD CONSTRUCTION PAGE
    });

    $("#imgContainer1").on("mouseover",".myImg",function(){
    	$("#bigPic1").attr("src",$(this).attr("src"));
    });

    $(".home").click(all);

    function all(){
		$(".myImg").remove();
		$(".pic-content").remove();
		$(".thumbnail").remove();
		$("#bigPic1").remove();	
    	for (var q=0; q<ourData.info.length; q++){	
			var imgHtml="";
			var sliderHtml = ""; 
			imgHtml += "<img class=\"myImg\" id=\"pic" + q +"\" src=\"#\">"; 
			sliderHtml+="<img class=\"pic-content\"id=\"picContent"+q+"\" src=\"#\" style=\"display:none;\">";
			$("#imgContainer1").append(imgHtml); //add to img class
			$("#slider").append(sliderHtml);
			var source = ourData.info[q].name;
			var alt = ourData.info[q].description;
			console.log("this is the source: " + source);
			$("#pic"+ q).attr("src",source); //add to img
			$("#picContent"+ q).attr("src",source); //add to slider
			$("#picContent"+q).attr("alt",alt);
		}
	
		var bigPicHtml = "<img id=\"bigPic1\" src=\"#\">";
		$("#imgContainer0").append(bigPicHtml);
		bigPicSrc = $("#pic0").attr("src");
		$("#bigPic1").attr("src",bigPicSrc);
		
		for (var j = 0; j < 7; j++);
		{
			var thumbnailHtml ="<img class=\"thumbnail\" id=\"thum"+j+"\"src=\"#\">";
			$(".thumbnails").append(thumbnailHtml);
			if("thum"+j != "thum0")
			{
				$("#thum"+j).css("opacity", "0.7");
			}
			$("#thum"+j).attr("src",$("#pic"+j).attr("src"))
		}
	}

});
		
		 
		
						
		



