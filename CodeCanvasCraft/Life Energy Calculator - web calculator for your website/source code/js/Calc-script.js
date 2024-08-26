jQuery(document).ready(function($){

    let curr_symbol = "$";

    const mc3_nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });
    const mc3_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits:1,
        maximumFractionDigits:1
    });

    $("#mc3_in_1, #mc3_in_3").on("input", function(){
        let vl = mc3_removeSign($(this).val());

        $(this).val(mc3_nft.format(vl));
        
        mc3_calc();
    });
    
    $("#mc3_in_2").on("input", function(){            
        mc3_calc();
    });

    $(".curr-sign").text(curr_symbol);

    mc3_calc();

    function mc3_calc(){
        mc3_getInputs();
        if(mc3_in_1 && mc3_in_2 && mc3_in_3){
            mc3_in_1 = mc3_removeSign(mc3_in_1);
            mc3_in_2 = mc3_removeSign(mc3_in_2);
            mc3_in_3 = mc3_removeSign(mc3_in_3);

            mc3_rs_1 = mc3_in_1/mc3_in_3*mc3_in_2;
            mc3_rs_2 = mc3_rs_1*12;
            mc3_rs_3 = mc3_rs_1*52;
            mc3_rs_4 = mc3_rs_1*365;

            $("#mc3_rs_1").text(mc3_nftd.format(mc3_rs_1));
            $("#mc3_rs_2").text(mc3_nftd.format(mc3_rs_2));
            $("#mc3_rs_3").text(mc3_nftd.format(mc3_rs_3));
            $("#mc3_rs_4").text(mc3_nftd.format(mc3_rs_4));

        } else {
            $("#mc3_rs_1, #mc3_rs_2, #mc3_rs_3, #mc3_rs_4").text("-");
        }
    }

    function mc3_getInputs(){
        mc3_in_1 = $("#mc3_in_1").val();
        mc3_in_2 = $("#mc3_in_2").val();
        mc3_in_3 = $("#mc3_in_3").val();
    }

    function mc3_removeSign(vl){
        return Number(vl.replace(/,/g,''));
    }
});