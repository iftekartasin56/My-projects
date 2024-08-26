jQuery(($) => {
    let in_gender = "M";
    let in_h_unit = "ft";
    let in_w_unit = "lbs";
    let in_goal = "maintenance";
    let in_act_level = "S";

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue: 0
    };

    const numOptionPercent = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 2,
        minimumValue: 0,
        maximumValue: 100
    };        
    
    const anElement1 = AutoNumeric.multiple('.in-num', numOptionCurrency);
    const elm1 = new AutoNumeric('#in_protein', numOptionPercent);
    const elm2 = new AutoNumeric('#in_carbs', numOptionPercent);
    const elm3 = new AutoNumeric('#in_fats', numOptionPercent);

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    $(".in-gender").on("click", function(){
        $(".in-gender").removeClass("is-active");
        $(this).addClass("is-active");

        in_gender = $(this).data("value");

        calcFunc();
    });

    $(".in-h-unit").on("click", function(){
        $(".in-h-unit").removeClass("is-active");
        $(this).addClass("is-active");

        in_h_unit = $(this).data("value");

        if(in_h_unit == "ft"){
            $("#h1_unit").text("ft");
            $("#h2_unit").text("in");
        } else {
            $("#h1_unit").text("m");
            $("#h2_unit").text("cm");
        }

        calcFunc();
    });

    $(".in-w-unit").on("click", function(){
        $(".in-w-unit").removeClass("is-active");
        $(this).addClass("is-active");

        in_w_unit = $(this).data("value");

        $("#w_unit").text(in_w_unit);

        calcFunc();
    });

    $(".in-goal").on("click", function(){
        $(".in-goal").removeClass("is-active");
        $(this).addClass("is-active");

        in_goal = $(this).data("value");

        if(in_goal == "maintenance"){
            elm1.set(30);
            elm2.set(40);
            elm3.set(30);
        } else if(in_goal == "weight-loss"){
            elm1.set(40);
            elm2.set(40);
            elm3.set(20);
        } else if(in_goal == "weight-gain"){
            elm1.set(30);
            elm2.set(40);
            elm3.set(30);
        }
        calcFunc();
    });

    $(".in-act-level").on("click", function(){
        $(".in-act-level").removeClass("is-active");
        $(this).addClass("is-active");

        in_act_level = $(this).data("value");

        calcFunc();
    });

    $(".cl-input, .in-num").on("input", function(){
        calcFunc();
    });

    $(".cl-input").on("change", function(){
        calcFunc()
    });

    $("#fr_sub_btn").on("click", function(){
        let in_email = $("#in_email").val();
        if(validateEmailAdd(in_email)){
            $("#in_email").removeClass("err-in");

            $("#wpforms-4178-field_1").val(in_email);    
            $("#wpforms-4178-field_2").val(txt_msg);
            $("#wpforms-submit-4178").click();

            setTimeout(() => {
                $("#in_email").val("");
            }, 1000);
        } else {
            $("#in_email").addClass("err-in");
        }
    });

    function calcFunc(){
        in_age = removeSign($("#in_age").val());
        in_height_1 = removeSign($("#in_height_1").val());
        in_height_2 = removeSign($("#in_height_2").val());
        in_weight = removeSign($("#in_weight").val());
        in_protein = removeSign($("#in_protein").val());
        in_carbs = removeSign($("#in_carbs").val());
        in_fats = removeSign($("#in_fats").val());

        var height = 0;
        var heightTens = in_height_1;
        var heightUnits = in_height_2;
        var heightType = in_h_unit;
        var weight = in_weight;
        var weightType = in_w_unit;
        var calories = 0;
        var age = in_age;
        var sex = in_gender;
        var job = in_act_level;
        var goal = in_goal;
        var carbratio = in_carbs/100;
        var protonratio = in_protein/100;
        var fatratio = in_fats/100;
        var carbratiocount = in_carbs;
        var protonratiocount = in_protein;
        var fatratiocount = in_fats;
        var carbs = 0;
        var protons = 0;
        var fats = 0;
        var ratiocount = carbratiocount + protonratiocount + fatratiocount;

        let sub_height_unit = "in";

        if(ratiocount == 100){
            $("#prcnt_err").hide();
            
            if(in_age && (in_height_1 || in_height_2) && in_weight){
                if (isNaN(heightUnits) || !heightUnits) {
                    heightUnits = 0;
                }

                if (heightType == "ft") {
                    height = ((heightTens * 30.48) + (heightUnits * 2.54));
                } else {
                    sub_height_unit = "cm";
                    height = (heightTens * 100) + heightUnits;
                }

                if (weightType == "lbs") {
                    weight = (weight * 0.453592);
                }

                if (sex == "M") {
                    calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
                } else {
                    calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
                }

                let activity_text = "";
                switch (job) {
                    case "S":
                        calories = Math.round(calories * 1.2);
                        activity_text = "Sedentary";
                        break;
                    case "L":
                        calories = Math.round(calories * 1.375);
                        activity_text = "Lightly active";
                        break;
                    case "M":
                        calories = Math.round(calories * 1.550);
                        activity_text = "Moderately active";
                        break;
                    case "V":
                        calories = Math.round(calories * 1.725);
                        activity_text = "Very active";
                        break;
                    case "E":
                        calories = Math.round(calories * 1.9);
                        activity_text = "Extra active";
                        break;
                }

                let goal_text = "";
                switch (goal) {
                    case "weight-loss":
                        if (calories <= 2000) calories = Math.round(0.9 * calories);
                        if (calories > 2000) calories = Math.round(0.8 * calories);
                        ccarbs = Math.round(carbratio * calories);
                        cprotons = Math.round(protonratio * calories);
                        cfats = Math.round(fatratio * calories);
                        carbs = Math.round(carbratio * calories / 4);
                        protons = Math.round(protonratio * calories / 4);
                        fats = Math.round(fatratio * calories / 9);
                        ratio = "40% carbs / 40% protein / 20% fats"
                        var rec = "calc-rec-wl";
                        goal_text = "Weight loss";
                        break;
                    case "maintenance":
                        ccarbs = Math.round(carbratio * calories);
                        cprotons = Math.round(protonratio * calories);
                        cfats = Math.round(fatratio * calories);
                        carbs = Math.round(carbratio * calories / 4);
                        protons = Math.round(protonratio * calories / 4);
                        fats = Math.round(fatratio * calories / 9);
                        var rec = "calc-rec-m";
                        ratio = "40% carbs / 30% protein / 30% fats"
                        goal_text = "Maintenance";
                        break;
                    case "weight-gain":
                        calories += 500;
                        ccarbs = Math.round(carbratio * calories);
                        cprotons = Math.round(protonratio * calories);
                        cfats = Math.round(fatratio * calories);
                        carbs = Math.round(carbratio * calories / 4);
                        protons = Math.round(protonratio * calories / 4);
                        fats = Math.round(fatratio * calories / 9);
                        var rec = "calc-rec-wg";
                        ratio = "40% carbs / 30% protein / 30% fats"
                        goal_text = "Weight Gain";
                    break;
                }
                
                $("#rs_1").html(`${nft.format(protons)} g per day (${nft.format(cprotons)} calories)`);
                $("#rs_2").html(`${nft.format(carbs)} g per day (${nft.format(ccarbs)} calories)`);
                $("#rs_3").html(`${nft.format(fats)} g per day (${nft.format(cfats)} calories)`);
                $("#rs_4").html(`${nft.format(calories)}`);
                
            } else {
                $("#rs_1, #rs_2, #rs_3, #rs_4").html("-");
            }
        } else {
            $("#prcnt_err").slideDown();
            $("#rs_1, #rs_2, #rs_3, #rs_4").html("-");
        }
    }

    function onlyNum(num){
        return isFinite(num) ? num : 0;
    }

    function removeSign(vl){
        return Number(vl.replace(/\$|\%|,/g, ''));
    }

     // Validate email input field
    function validateEmailAdd(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});