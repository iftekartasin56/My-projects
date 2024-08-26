jQuery(document).ready(function ($) {
    let Arpa = 0;
    let margin = 0;
    let churn = 0;

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

    new AutoNumeric('#in_1', numOptionCurrency);
    new AutoNumeric('#in_2', numOptionPercent);
    new AutoNumeric('#in_3', numOptionPercent);

    function removeComma(num) {
        return Number(num.replace(/,/g, ""));
    }

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $("#in_1").on("keyup", function () {
        Arpa = removeComma($("#in_1").val());
        updateLTV();
    });

    $("#in_2").on("keyup", function () {
        margin = Number($("#in_2").val() / 100);
        updateLTV();
    });

    $("#in_3").on("keyup", function () {
        churn = Number($("#in_3").val() / 100);
        updateLTV();
    });

    function updateLTV() {
        let LTV = (0.5 * 1 / churn * (2 * Arpa)) * margin;
        console.log(isFinite(LTV))
        if(isFinite(LTV)){
            $("#output").text("$" + " " + nft.format(LTV));
        }else{
            $("#output").text("$" + " " + nft.format(0));
        }
        
    }
    
});