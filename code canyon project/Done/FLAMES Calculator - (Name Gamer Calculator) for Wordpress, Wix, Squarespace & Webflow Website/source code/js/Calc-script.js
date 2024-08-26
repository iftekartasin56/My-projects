const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");

calcBtn.addEventListener("click", function() {
    calculate1();
});

clearBtn.addEventListener("click", function() {
    Clear1();
});
function Clear1() {
    $("#myn1").val("");
    $("#myn2").val("");
    $("#rs_sec").hide();
}

first_array = new Array();
second_array = new Array();
final_string = new Array();

function calculate1() {
    name1 = $("#myn1").val();
    name2 = $("#myn2").val();
    if (name1 === "" || name2 === "") {
        alert("Enter Your and Your Partner Name");
        return false;
    } else {
        first_array = name1.toLowerCase().replace(/ /gi, "").split("");
        second_array = name2.toLowerCase().replace(/ /gi, "").split("");
        for (i in first_array) {
            for (j in second_array) {
                if (first_array[i] == second_array[j] && first_array[i] != "" && second_array[j] != "") {
                    first_array[i] = "";
                    second_array[j] = "";
                }
            }
        }
        for (i = 0; i <= first_array.length; i++) {
            if (first_array[i] == "") {
                first_array.splice(i, 1);
            }
        }
        for (j = 0; j <= second_array.length; j++) {
            if (second_array[j] == "") {
                second_array.splice(j, 1);
            }
        }
        final_string = first_array.toString().replace(/,/gi, "") + second_array.toString().replace(/,/gi, "");
        l = final_string.length;
        result(l);
    }
}
function result(n) {
    string = "flames";
    number = n;
    process = new Array();
    while (string.length >= 2) {
        var j = 0;
        process = [];
        position = number % string.length;
        if (position != 0) {
            for (i = position + 1; i <= string.length; i++) {
                process[j] = string.charAt(i - 1);
                j++;
            }
            for (i = 0; i <= position - 2; i++) {
                process[j] = string.charAt(i);
                j++;
            }
            string = process.toString().replace(/,/gi, "");
        } else {
            string = string.slice(0, -1);
        }
    }
    display(string, n);
}
function display(s, n) {
    $(".rel-img").hide();
    let txt = "";

    if (s == "f") {        
        txt = "Friends";
    }
    if (s == "l") {
        txt = "Lover";
    }
    if (s == "a") {
        txt = "Affection";
    }
    if (s == "m") {
        txt = "Marriage";
    }
    if (s == "e") {
        txt = "Enemy";
    }
    if (s == "s") {
        txt = "Sister";
    }

    $("#rel_img_"+s).show();
    $("#result").text(txt);

    $("#name1").text($("#myn1").val());
    $("#name2").text($("#myn2").val());

    $("#rs_sec").slideDown();
}