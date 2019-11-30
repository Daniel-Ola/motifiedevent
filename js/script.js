//get log element
var log=document.getElementById("log");
  $("#dpid").change(function(){
    // console.log("run fileChanged");
    //get file
    var file = document.getElementById("dpid").files[0];
    log.innerHTML = "Selected File: " + file.name;
  }) ;
// log.innerHTML ="Please select a local file";
  //will be triggered when a local file is selected for input tag
  $("#submitDP").click(function(){
  	name = $("#fullname").val() ;
  	if(name != "")
  	{
  		$("#username").html(name) ;
  		// console.log("run fileChanged");
	    //get file
	    var file = document.getElementById("dpid").files[0];
	    if(file != undefined && (file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png'))
	    {
	    	log.innerHTML = "file name: "+file.name;
		    //new fileReader
		    var fileReader = new FileReader();
		    fileReader.readAsDataURL(file);
		    //will be triggered when a file is loaded from input
		    console.log($("#heights").height()) ;
		    $("#former").hide() ;
		    $("#latter").show() ;
		    hgt = $("#heights").height() ;//+ "px" ;
		    // $("#userImg").css('height' , hgt) ;
		    $("#printBtn").show() ;
		    fileReader.onload = function(e) {
		        document.getElementById("loadImg").innerHTML = '<img src="'+e.target.result+'" id="userImg" height="'+hgt+'" style="width: 100%; border-top-right-radius: 10px; border-bottom-left-radius: 10px; border-top: 2px solid red; border-left: 2px solid white;" class="img img-responsive thumbnail thumb-sm img-circle" />' ;
		        // $("loadImg").css({"background-image":e.target.result , "background-position": "center" , "background-size":"no-repeat"}) ;
		    };
	    }
	    else{alert("Please Select a valid image")}
	    
  	}
  	else{alert("Please enter your name") ;}
    

  }) ;
    


