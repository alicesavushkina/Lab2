function onFormSubmit() {
    if (check()){
        if (getUrlVars() > 0){
            alert("Введите, пожалуйста, данные через форму.");
            return false;
        }

        return true;
    }
    return false;
}

function getUrlVars(){
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars.length;
}

function check() {
    warningX.hidden = true;
    let yField = document.getElementById("y");
    yField.classList.remove("warning-field");
    warningYValue.hidden = true;
    warningYFormat.hidden = true;
    warningR.hidden = true;

    checkX();
    checkY();
    checkR();

    return (rValid && yValid && xValid);
}

function checkX() {
    let x = document.getElementById("x").value;

    if (x === 'no') {
        xValid = false;
        warningX.hidden = false;
    } else {
        xValid = true;
        warningX.hidden = true;
    }
}

function checkY() {
    let yField = document.getElementById("y");
    if (yField.value === '') {
        yField.classList.add("warning-field");
        warningYFormat.hidden = false;
        warningYValue.hidden = false;
        yValid = false;
    } else if (!/^[-+]?([0-5]([.,]\d+)?)/.test(yField.value)){
        yField.classList.add("warning-field");
        warningYValue.hidden = false;
        yValid = false;
    } else{
        console.log(parseFloat(yField.value));
        let y = yField.value;
        if (y < -5 || y > 3){
            yField.classList.add("warning-field");
            warningYValue.hidden = false;
            yValid = false;
        } else {
            yField.classList.remove("warning-field");
            warningYFormat.hidden = true;
            warningYValue.hidden = true;
            yValid = true;
        }
    }
}

function checkR() {
    let r = document.getElementById("r").value;

    if (r === 'no') {
        rValid = false;
        warningR.hidden = false;
    } else {
        rValid = true;
        warningR.hidden = true;
    }
}
