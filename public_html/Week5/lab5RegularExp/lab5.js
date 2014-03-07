/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function submitForm(){
   var firstName = document.getElementById("Fname");
   var lastName = document.getElementById("Lname");
   var emailAddress = document.getElementById("email");
   var userComments = document.getElementById("comments");
   var userCommentsMessage = document.getElementById("userInput");
   var fnameErrorMessage = document.getElementById("fnDtU2");
   var lnameErrorMessage = document.getElementById("lnDtU2");
   var emailErrorMessage = document.getElementById("eDtU2");
   var t1,t2,t3,t4;
   
   if (!firstName.value.length){
       firstName.className="bad";
       fnameErrorMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       fnameErrorMessage.className="error";
       t1 = false;
       console.log("error FirstName");
   } 
   
   else if (noSpaceAlphaValidate( firstName.value ) == false){
       firstName.className="bad";
       fnameErrorMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       fnameErrorMessage.className="error";
       t1 = false;
       console.log("error FirstName");
   }
   
   else{
      firstName.className="good";
      fnameErrorMessage.innerHTML="<strong>Valid</strong>";
      fnameErrorMessage.className="valid";
      t1 = true;
      console.log( firstName.value );
      console.log(noSpaceAlphaValidate( firstName.value ));
}   
   
   if(!lastName.value.length ||SpaceAlphaValidate(lastName.value)== false){
       lastName.className="bad";
       lnameErrorMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       lnameErrorMessage.className="error";
       t2 = false;
       console.log("Error LastName");
   }
   else{
      lastName.className="good";
      lnameErrorMessage.innerHTML="<strong>Valid</strong>";
      lnameErrorMessage.className="valid";
      t2 = true;
      console.log("valid LastName");
   }
   if(EmailValidate(emailAddress.value) == false){
       emailAddress.className="bad";
       emailErrorMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       emailErrorMessage.className="error";
       t3 = false;
       console.log("Error Email");
   }
   else{
       emailAddress.className="good";
       emailErrorMessage.innerHTML="<strong>Valid</strong>";
       emailErrorMessage.className="valid";
       t3 = true;
       console.log("Valid Email");
   }
   if(userComments.value.replace(/[\s\r\n]/g,"")===""){
       userComments.className = "bad";
       userCommentsMessage.innerHTML = "<strong>Why not add some comments?</strong>";
       userCommentsMessage.className = "error";
       console.log("comment field is empty");
       t4 = false;
       alert("Please Enter Comments");
   }
   else if (strip_HTML(userComments.value)== false){
       userComments.className = "bad";
       userCommentsMessage.innerHTML = "<strong>Get your HTML out of here!!!</strong>";
       userCommentsMessage.className = "error";
       alert("!!!HTML CODE NOT ALLOWED!!!");
       userComments.value = strip_HTML(userComments.value);
       t4 = false;
   }
   else{
       userComments.className = "good";
       userCommentsMessage.innerHTML = "<strong>Valid</strong>";
       userCommentsMessage.className = "valid";
       t4 = true;
   }
   
   if (t1 == false||t2 == false||t3 == false||t4 == false){
       alert(" You have made a mistake. Now go back and try again");
   }
   else 
       alert( "Thank you "+ firstName.value+" "+lastName.value+" "+"for not messing this up.");
   }
function noSpaceAlphaValidate(str){
    var alphaRegex = /^[A-z]{1,}$/;
    return alphaRegex.test(str);
}
function SpaceAlphaValidate(str){
    var slphaRegex = /^[A-z" "]{1,}$/;
    return slphaRegex.test(str);
}
function EmailValidate(str){
    var emailRegex = /(^[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
    return emailRegex.test(str);
}
function strip_HTML(str){
    var findHtml = /<(.|\n)*?>/gi;
    return str.replace(findHtml,"");
    }
