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

    new AutoNumeric('#in_1', numOptionCurrency);
    new AutoNumeric('#in_2', numOptionPercent);

    function removeComma(num) {
        return Number(num.replace(/,/g, ""));
    };

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $(".cl-input").on("input", function () {
        Calc();
    });

    $(".curr-sign").text(curr_symbol);

    function Calc() {
        let investment = removeComma($("#in_1").val());
        let investor_equity = Number($("#in_2").val()) / 100;
        let post_money_val = investment / investor_equity;
        let pre_money_val = post_money_val - investment;
        
        if (isFinite(pre_money_val)) {
            $("#output_1").text(curr_symbol + nft.format(pre_money_val));
        } else {
            $("#output_1").text(curr_symbol + nft.format(0));
        }

        if (isFinite(post_money_val)) {
            $("#output_2").text(curr_symbol + nft.format(post_money_val));
        } else {
            $("#output_2").text(curr_symbol + nft.format(0));
        }
    }
}); 