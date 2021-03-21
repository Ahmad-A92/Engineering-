// alert as greeting massages for the users 
alert ("Hello How are You, We hope you will enjoy looking at the information covered on the site");

// To notify the user if he enter the incorrect page at the web site & using while statement to check the inputs. 
yourOcuupation = prompt("What is your occupation");
while (yourOcuupation !== "Civil Engineering" && yourOcuupation !=="Structural Engineering"){
    yourOcuupation = prompt("please select Civil Engineering/Structural Engineering");
}

if (yourOcuupation == "Civil Engineering") {
    document.write("<h3>"+"Hellow Civil Enginner"+"</h3>");
}else if (yourOcuupation == "Structural Engineering") { 
    document.write("<h3>"+"Hellow Structural Enginner"+"</h3>");
} 

// counsile  order 
console.log("This web page is just for training within software development courses");

// To check the age of the users 

var yourAge = confirm("Please confirm that you are above 18");
if (yourAge==true) {document.write("<p3>"+"you have confiremd that you are above 18"+"</p3>");
} else {document.write("<p3>"+"you have confiremd that you are above 18"+"</p3>");
}
// for loop statement 
RepeatedPictures= prompt("Enter the number of time you want to see engineering logo repeated at the below side");

for (var i=0; i<RepeatedPictures; i++){
    document.write('<img src="download.jpg" name="logo" width="435" height="500" />'+(i+1));
}  
