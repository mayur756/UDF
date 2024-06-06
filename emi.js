function findemi(){

    let amount = parseInt(document.getElementById("amu_item").value);
    let rate = parseInt(document.getElementById("rat_item").value);
    let months = parseInt(document.getElementById("monofemi").value);
    
    emi_cal(amount,rate,months);
}
    
function emi_cal(amount,rate,months)
{
        let interest = (amount * (rate * 0.01)) / months;
     
        let total = ((amount / months) + interest).toFixed(2);
    
        document.getElementById("res-1").innerHTML = "EMI : (₹)" + total;
} 