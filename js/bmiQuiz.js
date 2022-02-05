document.getElementById("BMICalculator").onsubmit=function() {

    weight = parseInt(document.querySelector('input[name = "Weight"]').value);
    height = parseInt(document.querySelector('input[name = "Height"]').value)/100;

    console.log("Height: " + height);
    console.log("Weight: " + weight);

    result = weight/(height*height);

    console.log("Result: " + result);

    document.getElementById("bmi").innerHTML = result.toFixed(2);

    if (result <= 18.4) {result2 = "You are too skinny... <a href='https://bmicalculatorusa.com/weight-gain-tips/' target='_blank'> click on here to learn how to gain weight</a>";}
    else if (result < 25.0) {result2 = "You are Healthy keep up the good work!";}
    else if (result > 30) {result2 = "Your BMI is too high... <a href='https://bmicalculatorusa.com/weight-loss-tips/' target='_blank'> click on here to learn how to lose weight</a>";}

    document.getElementById("bmi2").innerHTML = result2;
    return false;
}
