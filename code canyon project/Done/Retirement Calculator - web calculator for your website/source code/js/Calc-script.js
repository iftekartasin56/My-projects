jQuery(document).ready(function ($) {
    const hm_cl6_numOptionCurrency = {
      digitGroupSeparator        : ',',
      decimalCharacter           : '.',
      decimalCharacterAlternative: '.',
      currencySymbol             : '',
      currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
      decimalPlaces              : 0,
      minimumValue: 0
    };

    const hm_cl6_numOptionPercent = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 2,
        minimumValue	       : 0,
        maximumValue	       : 100
    };

    const hm_cl6_nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    new AutoNumeric('#hm_cl6_in_1', hm_cl6_numOptionCurrency);
    new AutoNumeric('#hm_cl6_in_2', hm_cl6_numOptionCurrency);
    new AutoNumeric('#hm_cl6_in_3', hm_cl6_numOptionCurrency);
    new AutoNumeric('#hm_cl6_in_4', hm_cl6_numOptionCurrency);
    new AutoNumeric('#hm_cl6_in_5', hm_cl6_numOptionPercent);

    $("#hm_cl6 #hm_cl6_in_2").on("input", function () {
      $(this).removeClass("err-input");
    });
    $("#hm_cl6 #hm_cl6_in_2").on("change", function () {
      let current_age = hm_cl6_removeSign($("#hm_cl6_in_1").val());
      let retire_age = hm_cl6_removeSign($("#hm_cl6_in_2").val());
      
      if(retire_age <= current_age){
        $(this).addClass("err-input");
      } else {
        $(this).removeClass("err-input");
      }
    });
    
    $("#hm_cl6 .cl_input").on("input", function () {
        hm_cl6_calcFunc();
    });
    
    function hm_cl6_calcFunc(){
      let current_age = hm_cl6_removeSign($("#hm_cl6_in_1").val());
      let retire_age = hm_cl6_removeSign($("#hm_cl6_in_2").val());
      let investment_amount = hm_cl6_removeSign($("#hm_cl6_in_3").val());
      let monthly_contri = hm_cl6_removeSign($("#hm_cl6_in_4").val());
      let annual_return = hm_cl6_removeSign($("#hm_cl6_in_5").val())/100;
      let monthly_return = annual_return/12;
      let monthly_contri_100 = monthly_contri + 100;

      let total_years = (retire_age - current_age); // output
      let total_months = total_years * 12;

      if(current_age && retire_age && retire_age > current_age && monthly_contri){
        
        let i = 0;

        let total_blnc_1 = 0, total_blnc_2 = 0, total_contri_1 = 0, total_contri_2 = 0;

        for(i = 0; i < total_months; i++) {
          let return_am_1 = 0;
          let return_am_2 = 0;

          if(i == 0){
            return_am_1 = investment_amount * monthly_return;
            total_blnc_1 = investment_amount + monthly_contri + return_am_1;
            
            return_am_2 = investment_amount * monthly_return;
            total_blnc_2 = investment_amount + monthly_contri_100 + return_am_2;
          } else {
            return_am_1 = total_blnc_1 * monthly_return;
            total_blnc_1 = total_blnc_1 + monthly_contri + return_am_1;

            return_am_2 = total_blnc_2 * monthly_return;
            total_blnc_2 = total_blnc_2 + monthly_contri_100 + return_am_2;
          }

          total_contri_1 = total_contri_1 + monthly_contri;
          total_contri_2 = total_contri_2 + monthly_contri_100;
        }

        let solid_total_1 = investment_amount + total_contri_1;
        let solid_total_2 = investment_amount + total_contri_2;

        let total_growth_1 = total_blnc_1 - solid_total_1;
        let total_growth_2 = total_blnc_2 - solid_total_2;
        let extra_growth =  total_growth_2 - total_growth_1;

        let initial_blnc_prcnt = (100/total_blnc_1)*investment_amount;
        let total_contri_prcnt = (100/total_blnc_1)*total_contri_1;
        let total_growth_prcnt = (100/total_blnc_1)*total_growth_1;

        $("#hm_cl6_total_years").html(`<u><b>${total_years}</b></u> ${total_years > 1 ? "years" : "year"}`);
        $("#hm_cl6_total_blnc_1").text("$"+hm_cl6_nft.format(total_blnc_1));
        $("#hm_cl6_initial_blnc").text("$"+hm_cl6_nft.format(investment_amount));
        $("#hm_cl6_total_contri").text("$"+hm_cl6_nft.format(total_contri_1));
        $("#hm_cl6_total_growth").text("$"+hm_cl6_nft.format(total_growth_1));
        $("#hm_cl6_extra_growth").text("$"+hm_cl6_nft.format(extra_growth));
        $("#hm_cl6_initial_blnc_prcnt").text(hm_cl6_nft.format(initial_blnc_prcnt)+"%");
        $("#hm_cl6_total_contri_prcnt").text(hm_cl6_nft.format(total_contri_prcnt)+"%");
        $("#hm_cl6_total_growth_prcnt").text(hm_cl6_nft.format(total_growth_prcnt)+"%");
      } else {
        $("#hm_cl6_total_years").html(`<u><b>${0}</b></u> year`);
        $("#hm_cl6_total_blnc_1").text("$"+hm_cl6_nft.format(0));
        $("#hm_cl6_initial_blnc").text("$"+hm_cl6_nft.format(0));
        $("#hm_cl6_total_contri").text("$"+hm_cl6_nft.format(0));
        $("#hm_cl6_total_growth").text("$"+hm_cl6_nft.format(0));
        $("#hm_cl6_extra_growth").text("$"+hm_cl6_nft.format(0));
        $("#hm_cl6_initial_blnc_prcnt").text(hm_cl6_nft.format(0)+"%");
        $("#hm_cl6_total_contri_prcnt").text(hm_cl6_nft.format(0)+"%");
        $("#hm_cl6_total_growth_prcnt").text(hm_cl6_nft.format(0)+"%");
      }
    }

    function hm_cl6_removeSign(num) {
      return Number(num.replace(/[$,%]/g, ""));
    }
  });