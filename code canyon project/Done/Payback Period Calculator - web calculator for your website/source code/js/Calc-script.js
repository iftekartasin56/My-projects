jQuery(document).ready(function ($) {
    let initial_investment = 0;
    let annual_cash_flow = 0;
    let yemo = 0;

    let curr_symbol = "$";

    const numOptionCurrency = {
        digitGroupSeparator: ',',
        decimalCharacter: '.',
        decimalCharacterAlternative: '.',
        currencySymbol: '',
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces: 0
    };
    const numOptionPercent = {
        digitGroupSeparator: ',',
        decimalCharacter: '.',
        decimalCharacterAlternative: '.',
        currencySymbol: '',
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces: 2,
        minimumValue: 0,
        maximumValue: 100
    };
    new AutoNumeric('#in_1', numOptionPercent);
    new AutoNumeric('#in_2', numOptionCurrency);
    new AutoNumeric('#in_3', numOptionCurrency);
    new AutoNumeric('#in_4', numOptionCurrency);
    new AutoNumeric('#in_5', numOptionCurrency);
    new AutoNumeric('#in_6', numOptionCurrency);
    new AutoNumeric('#in_7', numOptionCurrency);
    new AutoNumeric('#in_8', numOptionCurrency);


    function removeComma(num) {
        return Number(num.replace(/,/g, ""));
    }

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $(".curr-sign").text(curr_symbol);
    $("#in_1").on("keyup", function () {
        year_month();
    })

    $("#in_2").on("keyup", function () {
        year_month();
    })

    $("#in_3").on("keyup", function () {
        year_month();
    })

    $("#in_4").on("keyup", function () {
        year_month();
    })
    $("#in_5").on("keyup", function () {
        year_month();
    })

    $("#in_6").on("keyup", function () {
        year_month();
    })

    $("#in_7").on("keyup", function () {
        year_month();
    })
    $("#in_8").on("keyup", function () {
        year_month();
    })

    function year_month() {
        let initial_investment = removeComma($("#in_2").val());
        let annual_cash_flow = removeComma($("#in_3").val());
        let yemo = (initial_investment / annual_cash_flow);
        let year = (Math.floor(yemo));
        let month = (Math.floor((yemo - year) * 12));
        let txt1 = "-";
        let txt2 = "-";

        if (year > 0) {
            if (year == 1) {
                txt1 = year + " year";
            } else {
                txt1 = year + " years";
            }
        }

        if (month > 0) {
            if (month == 1) {
                txt2 = month + " month";
            } else {
                txt2 = month + " months";
            }
        }

        let txt3 = "-";
        if (year > 0 && month > 0) {
            txt3 = txt1 + " and " + txt2;
        } else if (year > 0 && month == 0) {
            txt3 = txt1;
        } else if (year == 0 && month > 0) {
            txt3 = txt2;
        }

        $("#test1").text(txt3);


        let discount_price = removeComma($("#in_1").val()) / 100;
        let dpp_up = -1 * Math.log(1 - initial_investment * discount_price / annual_cash_flow);
        let dpp_down = Math.log((1 + discount_price));
        let DPP = (dpp_up / dpp_down);
        let year2 = (Math.floor(DPP));
        let month2 = (Math.floor((DPP - year2) * 12));
        let txt4 = "-";
        let txt5 = "-";

        if (year2 > 0) {
            if (year2 == 1) {
                txt4 = year + " year";
            } else {
                txt4 = year + " years";
            }
        }

        if (month2 > 0) {
            if (month2 == 1) {
                txt5 = month2 + " month";
            } else {
                txt5 = month2 + " months";
            }
        }

        let txt6 = "-";
        if (year2 > 0 && month2 > 0) {
            txt6 = txt4 + " and " + txt5;
        } else if (year2 > 0 && month2 == 0) {
            txt6 = txt5;
        } else if (year2 == 0 && month2 > 0) {
            txt6 = txt4;
        }
        $("#test2").text(txt6);

        let y1 = removeComma($("#in_4").val());
        let y2 = removeComma($("#in_5").val());
        let y3 = removeComma($("#in_6").val());
        let y4 = removeComma($("#in_7").val());
        let y5 = removeComma($("#in_8").val());
        let ySum = (y1 + y2 + y3 + y4 + y5)

        let yemo2 = (initial_investment / ySum);
        let year22 = (Math.floor(yemo2));
        let month22 = (Math.floor((yemo2 - year22) * 12));
        let txt11 = "-";
        let txt22 = "-";

        if (year22 > 0) {
            if (year22 == 1) {
                txt11 = year22 + " year";
            } else {
                txt11 = year22 + " years";
            }
        }

        if (month22 > 0) {
            if (month22 == 1) {
                txt22 = month22 + " month";
            } else {
                txt22 = month22 + " months";
            }
        }

        let txt33 = "-";
        if (year22 > 0 && month22 > 0) {
            txt33 = txt11 + " and " + txt22;
        } else if (year22 > 0 && month22 == 0) {
            txt33 = txt11;
        } else if (year22 == 0 && month22 > 0) {
            txt33 = txt22;
        }

        $("#test33").text(txt33);
    }
});