function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["email"].value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");
    let mobile= document.forms["myForm"]["mobile"].value;
    let password= document.forms["myForm"]["pwd"].value;
    let cpassword= document.forms["myForm"]["cpwd"].value;
    
    // Checking if Name is filled and it has only characters   
   
    
   if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(!(isNaN(name))){
      alert("Name should have only characters!");
      return false;
    } 
    
    else if (mobile.length!=10 || isNaN(mobile))
    {
        alert( "Please enter a 10 digit mobile number");
        return false;
    }
    else  if (atposition<1 || dotposition<atposition+2 || dotposition>=email.length)
    {
       alert( "Please enter a valid Email address!");
       return false;
    }
    else if (password.length<6)
    {
        alert( "Please Enter minimum 6 characters!")
        return false;
    }
    else if (password!=cpassword) 
    {
       alert( "Password's dont Match!")
       return false;
    }         
    else {
      
      document.write("<body style = 'background-color: lemonchiffon; text-align:center; margin-top: 20%;'>");
      document.write("<h1 style ='color:black'>");
      document.write("Hi "+name+ "! Thanks for filling the form!</h1>");
      document.write("</body>")
    }
 
  }

  function WelcomeForm() {
    let name = document.forms["myForm"]["fname"].value;
    let password= document.forms["myForm"]["pwd"].value;
    if (name == "") {
      alert("Please enter your UserName");
      return false;
    }
    else if(!(isNaN(name))){
      alert("UserName should have only characters!");
      return false;
    } 
    else if(password == "") {
      alert("Please enter your password!");
    }
    else {
      document.write("<body style = 'background-color: lemonchiffon; text-align:center; margin-top: 20%;'>");
      document.write("<h1 style ='color:black'>");
      document.write("Welcome Back "+name+"!</h1>");
      document.write("</body>")
    }
  }