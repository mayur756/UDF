function Bmi_cal()
{
    let heightInput = document.getElementById('hei1').value;
    let weightInput = document.getElementById("wei1").value;
    cal_bmi(heightInput,weightInput);
}

function cal_bmi(heightInput,weightInput){
    
    let BMI, height, weight,msg;

    height = heightInput;
    weight = weightInput;
    BMI = weight / (height * height);

    
    if (BMI < 18.5) 
    {
        msg = "BMI is Underweight";
    }
     else if (BMI > 18.5 && BMI < 24.9) 
    {
        msg = "BMI is Normal weight";
    } 
    else if (BMI > 25 && BMI < 29.9) 
    {
        msg = "BMI is overweight";
    } 
    else if(BMI > 30)
    {
        msg = "BMI is Obesity";
    }
    else 
    {
        msg = "ERROR: Enter the correct data";
    }

    document.getElementById('ans').innerHTML = msg;

}