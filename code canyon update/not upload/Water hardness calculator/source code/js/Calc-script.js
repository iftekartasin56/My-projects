document.hardheid.Ca.addEventListener("keyup", function(e){
    if(e.which == 13) {
        bereken();
    }
});
document.hardheid.Mg.addEventListener("keyup", function(e){
    if(e.which == 13) {
        bereken();
    }
});
function bereken() {
    var Ca = document.hardheid.Ca.value
    var Mg = document.hardheid.Mg.value
    var eenheidCa = document.hardheid.eenheidCa.value
    var eenheidMg = document.hardheid.eenheidMg.value

    if (eenheidCa == "1") {
        Ca = Ca
    } else if (eenheidCa == "3") {
        Ca = Ca
    }


    if (eenheidMg == "1") {
        Mg = Mg
    } else if (eenheidMg == "3") {
        Mg = Mg
    }

    if (Ca && Mg) {
        CaCO3 = 2.5 * Ca + 4.1 * Mg

        if (CaCO3 < 60) {
            document.getElementById("oordeelCaCO3").innerText = "Soft water"
        } else if (CaCO3 >= 60 && CaCO3 < 120) {
            document.getElementById("oordeelCaCO3").innerText = "Moderately hard water"
        } else if (CaCO3 >= 120 && CaCO3 < 180) {
            document.getElementById("oordeelCaCO3").innerText = "Hard water"
        } else {
            document.getElementById("oordeelCaCO3").innerText = "Very hard water"
        }

        document.getElementById("CaCO3_mg").innerHTML = CaCO3.toPrecision(3) + " <small style='font-weight:normal;'>mg/L</small>"
        document.getElementById("CaCO3_gpg").innerHTML = ((1/17.1)*CaCO3).toPrecision(3) + " <small style='font-weight:normal;'>GPG</small>"
    } else {
        alert("You have to give the Calcium and Magnesium concentrations.")
    }
}