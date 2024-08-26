for (var l = document.querySelectorAll(".con-1"), i = 0; i < l.length; i++) l[i].style.display = "block";
for (var l = document.querySelectorAll(".con-2"), i = 0; i < l.length; i++) l[i].style.display = "none";

var bmi__calculator = {
    unit: 1,
    init: function () {
        this.listener()
    },
    changeUnit: function (x) {
        if(x == 1){
            for (var l = document.querySelectorAll(".con-1"), i = 0; i < l.length; i++) l[i].style.display = "block";
            for (var l = document.querySelectorAll(".con-2"), i = 0; i < l.length; i++) l[i].style.display = "none";
        } else {
            for (var l = document.querySelectorAll(".con-1"), i = 0; i < l.length; i++) l[i].style.display = "none";
            for (var l = document.querySelectorAll(".con-2"), i = 0; i < l.length; i++) l[i].style.display = "block";
        }
        for (var l = document.querySelectorAll(".option-item"), i = 0; i < l.length; i++) l[i].classList.remove("is-active");

        document.querySelectorAll(".option-item")[x-1].classList.add("is-active");
        this.unit = x;
    },
    listener: function () {
        document.getElementById("bmi__height_in").addEventListener("keyup", function (e) {
            parseFloat(this.value) > 11 && (this.value = 11)
        }), document.getElementById("bmi__height_ft").addEventListener("keyup", function (e) {
            parseFloat(this.value) > 9 && (this.value = 9)
        }), document.getElementById("bmi__weight_lbs").addEventListener("change", function (e) {
            parseFloat(this.value) < 80 && (this.value = 80), parseFloat(this.value) > 800 && (this.value = 800)
        });
    },
    calculate: function () {
        var e = {
            ft: (this.unit == 1) ? parseFloat(document.querySelector("#bmi__height_ft").value) : 0 || 0,
            in: (this.unit == 1) ? parseFloat(document.querySelector("#bmi__height_in").value) : parseFloat(document.querySelector("#bmi__height_cm").value)/2.54 || 0,
            lbs: (this.unit == 1) ? parseFloat(document.querySelector("#bmi__weight_lbs").value) : parseFloat(document.querySelector("#bmi__weight_kg").value) * 2.205
            },
            t = document.querySelector("#bmi__value");
        if (e.bmi = e.lbs / Math.pow(12 * e.ft + e.in, 2) * 703, e.weight_min = 18.5 * Math.pow(12 * e.ft + e.in, 2) / 703, e.weight_max = 24.9 * Math.pow(12 * e.ft + e.in, 2) / 703, e.bmi = e.bmi.toFixed(1), isNaN(e.bmi)) return !1;
        document.querySelector("#bmi__weight_range").innerHTML = ((this.unit == 1) ? e.weight_min.toFixed(0) : (e.weight_min/2.205).toFixed(0)) + " - " + ((this.unit == 1) ? e.weight_max.toFixed(0) : (e.weight_max/2.205).toFixed(0)), t.className = "", t.innerHTML = e.bmi;
        document.querySelector("#bmi__weight_unit").innerHTML = (this.unit == 1) ? "LBS" : "KG";
        for (var l = document.querySelectorAll(".bmi__details_result_text"), i = 0; i < l.length; i++) l[i].style.display = "none";
        e.bmi < 18.5 ? document.getElementById("bmi__details_result_text_under").style.display = "block" : e.bmi < 25 ? document.getElementById("bmi__details_result_text_normal").style.display = "block" : e.bmi < 30 ? document.getElementById("bmi__details_result_text_over").style.display = "block" : document.getElementById("bmi__details_result_text_obese").style.display = "block", 
        e.bottom = (e.bmi - 15) * (260 / 35) - 24, 
        e.bottom < -24 && (e.bottom = -24), 
        e.bottom > 260 && (e.bottom = 236), 
        document.querySelector("#bmi__marker").style.bottom = e.bottom + "px"
    }
};
bmi__calculator.calculate();