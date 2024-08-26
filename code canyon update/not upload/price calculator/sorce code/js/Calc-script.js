jQuery(document).ready(function ($) {

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

    const anElement1 = new AutoNumeric('#in_1', numOptionCurrency);
    const anElement2 = new AutoNumeric('#in_2', numOptionPercent);

    function removeComma(num) {
        return Number(num.replace(/,/g, ""));
    }

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $('.cl-input').on('input', function(){
        $('#err_msg').hide();
    });

    $("#clear_btn").on("click", function () {
        anElement1.set("");
        anElement2.set("");
        $('#rs_1').text("$0.00");
        $('#rs_2').text("$0.00");
        $('#rs_3').text("0.00%");
        $('#err_msg').hide();
    });

    $(".curr-sign").text(curr_symbol);
    $('#err_msg').hide();

    $('#calc_btn').on("click", function() {
        Calc();
    });


    function Calc(){
        in_1 = removeComma($("#in_1").val());
        in_2 = Number($("#in_2").val()) / 100;
        
        if(in_1 && in_2){
            let price_revenue = (in_1 / (1 - in_2));
            let gross_profit = price_revenue * in_2;
            let mark_up = ((gross_profit / in_1) * 100);


            $("#rs_1").text(curr_symbol + nftd.format(price_revenue));
            $("#rs_2").text(curr_symbol + nftd.format(gross_profit));
            $("#rs_3").text(nftd.format(mark_up) + "%");

            $('#err_msg').hide();
        } else{
            $('#err_msg').show();
            $("#rs_1").text(`${curr_symbol}0.00`);
            $("#rs_2").text(`${curr_symbol}0.00`);
            $("#rs_3").text("0.00%");
        }
    }
}); 