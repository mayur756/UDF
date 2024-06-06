function ageCalc() {
    let person_age = document.getElementById("dob_item").value;
    let dob = new Date(person_age);

    if(person_age==null || person_age=='') {

      document.getElementById("messg").innerHTML = "Choose a date please...";   
    } 
    else {

    let month = Date.now() - dob;
    
    let age_dt = new Date(month); 
       
    let year = age_dt.getUTCFullYear();
    
    let age = (year - 1970);
    
    return document.getElementById("res-3").innerHTML ="Age is: " + age + " years. ";
    }
}