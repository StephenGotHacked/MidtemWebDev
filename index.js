function show(){
    var detail = document.getElementById("details");
    
        if(detail.style.display === "none"){
            detail.style.display = "block";
        }else{
            detail.style.display = "none";
        }
}
function Submit(){
    var email = document.getElementById("email").value;
    var connum = document.getElementById("tel").value;
    var concern = document.getElementById("textarea").value;
    
    if(email===""){
        alert("Email is required!");
        return false;
    }else if(connum===""){
        alert("Contact Number is required!");
        return false;
    }else if(connum.length > 12){
        alert("Your Number Exceed in Philippines Number");
        return false;
    }else if(connum.length < 11){
        alert("Your Number Didn't Reach in Philipphines Number");
        return false;
    }else if(concern===""){
        alert("Fill up the concern field");
        return false;
    }else{
        alert("Reviewing your concern, Thank you!");
        return true;
    }
}
