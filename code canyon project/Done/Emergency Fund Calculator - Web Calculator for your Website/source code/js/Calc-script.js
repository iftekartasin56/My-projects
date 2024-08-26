jQuery(document).ready(function ($) {
    
    let curr_symbol = "$";
    let in_serial = 0;

    const hm_cl2_numOptionCurrency = {
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        decimalCharacterAlternative: ".",
        currencySymbol: "",
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces: 2,
        minimumValue: 0
    };

    const hm_cl2_numOptionNum = {
        digitGroupSeparator: ",",
        decimalCharacter: ".",
        decimalCharacterAlternative: ".",
        currencySymbol: "",
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces: 0,
        minimumValue: 0
    };

    new AutoNumeric("#hm_cl2_month_in", hm_cl2_numOptionNum);

    const hm_cl2_nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    const hm_cl2_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    AutoNumeric.multiple(".in_format", hm_cl2_numOptionCurrency);

    function hm_cl2_removeComma(num) {
        return Number(num.replace(/[curr_symbol,%]/g, ""));
    }

    $(document).on("click", ".delete-input", function(){
        $(this).closest(".col-md-4").remove();
        calcFunc();
    });

    $(".add-expense").on("click", function(){
        let type = $(this).data("type");

        let exp_input = `
        <div class="col-md-4 form-group">
            <div class="form-group sp-text" style="margin-bottom: 8px;">
                <img src="https://i.postimg.cc/KYFwZJbF/x-icon.png" class="delete-input" alt="">
                <input type="text" class="title-input-box cl__inputs" />
            </div>
            <div class="form-group sp-text">
                <input type="text" class="form-control ${type} in_format cl__inputs" placeholder="0" id="in_${in_serial}" />
                <span class="prepend-text font2 curr-sign">${curr_symbol}</span>
            </div>
        </div>
        `;

        $("#"+type).append(exp_input);

        new AutoNumeric(`#in_${in_serial}`, hm_cl2_numOptionCurrency);
        in_serial++;
    });

    $(document).on("input", ".cl__inputs", function () {
        calcFunc();
    });

    $(".curr-sign").text(curr_symbol);

    function calcFunc(){
        let mn_fix_exp_total = 0, mn_var_exp_total = 0, mn_loan_exp_total = 0;

        let total_months = hm_cl2_removeComma($("#hm_cl2_month_in").val());

        $(".mn_fix_exp_in").each(function(i, elm){
            mn_fix_exp_total = mn_fix_exp_total + hm_cl2_removeComma($(elm).val());
        });

        $(".mn_var_exp_in").each(function(i, elm){
            mn_var_exp_total = mn_var_exp_total + hm_cl2_removeComma($(elm).val());
        });

        $(".mn_loan_exp_in").each(function(i, elm){
            mn_loan_exp_total = mn_loan_exp_total + hm_cl2_removeComma($(elm).val());
        });


        let total_exp = mn_fix_exp_total + mn_var_exp_total + mn_loan_exp_total;

        $("#mn_fix_exp_total").text(curr_symbol+hm_cl2_nft.format(mn_fix_exp_total));
        $("#mn_var_exp_total").text(curr_symbol+hm_cl2_nft.format(mn_var_exp_total));
        $("#mn_loan_exp_total").text(curr_symbol+hm_cl2_nft.format(mn_loan_exp_total));
        
        $("#total_monthly_expense").text(curr_symbol+hm_cl2_nftd.format(total_exp));
        $("#total_months").text(total_months+" months");
        $("#total_amount_save").text(curr_symbol+hm_cl2_nftd.format(total_exp*total_months));

        

    }
});