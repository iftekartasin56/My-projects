jQuery(document).ready(function ($) {

    let curr_symbol = "$";

    const hm_cl3_numOptionCurrency = {
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        decimalCharacterAlternative: ".",
        currencySymbol: "",
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces: 2,
        minimumValue: 0,
    };
    const hm_cl3_numOptionPercent = {
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        decimalCharacterAlternative: ".",
        currencySymbol: "",
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces: 2,
        minimumValue: 0,
        maximumValue: 100
    };

    AutoNumeric.multiple(".in_format", hm_cl3_numOptionCurrency);

    const hm_cl3_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    $(".curr-sign").text(curr_symbol);

    function hm_cl3_removeComma(num) {
        return Number(num.replace(/[curr_symbol,%]/g, ""));
    }
    function hm_cl3_calculateSumOnChange() {
        var sum = 0;
        $('input[id^="hm_cl3_in_"]').on("input", function () {
            sum = 0; // Reset the sum to recalculate it based on the new values
            $('input[id^="hm_cl3_in_"]').each(function () {
                var value = hm_cl3_removeComma($(this).val(), 10);
                if (!isNaN(value)) {
                    sum += value;
                }
                $("#hm_cl3_total_count").text(curr_symbol + hm_cl3_nftd.format(sum));
            });

        });
    }

    hm_cl3_calculateSumOnChange()
})