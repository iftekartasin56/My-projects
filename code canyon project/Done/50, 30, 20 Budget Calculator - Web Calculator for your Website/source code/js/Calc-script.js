jQuery(document).ready(function ($) {
    const hm_cl5_numOptionCurrency = {
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        decimalCharacterAlternative: ".",
        currencySymbol: "",
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces: 2,
        minimumValue: 0,
    };
    const hm_cl5_numOptionPercent = {
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        decimalCharacterAlternative: ".",
        currencySymbol: "",
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces: 2,
        minimumValue: 0,
        maximumValue: 100
    };

    new AutoNumeric("#hm_cl5_in_1", hm_cl5_numOptionCurrency);

    const hm_cl5_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    function hm_cl5_removeComma(num) {
        return Number(num.replace(/[$,%]/g, ""));
    }
    $('#hm_cl5_in_1').on("input", function (){
        Calc();
    })

    function Calc(){
        hm_cl5_in_1 = hm_cl5_removeComma($("#hm_cl5_in_1").val(), 10);

        let necessities = hm_cl5_in_1 * .5;
        let wants = hm_cl5_in_1 * .3;
        let savings_dr = hm_cl5_in_1 * .2;

        $("#hm_cl5_necessities").text("$" + hm_cl5_nftd.format(necessities))
        $("#hm_cl5_wants").text("$" + hm_cl5_nftd.format(wants))
        $("#hm_cl5_savings_dr").text("$" + hm_cl5_nftd.format(savings_dr))
    }
})