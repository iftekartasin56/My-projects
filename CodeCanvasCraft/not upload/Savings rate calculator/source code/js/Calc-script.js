jQuery(document).ready(function($){
    const mc1_nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });
    const mc1_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:2
    });

    $("#mc1_in_1, #mc1_in_2").on("input", function(){
        let vl = mc1_removeSign($(this).val());

        $(this).val(mc1_nft.format(vl));
        
        mc1_calc();
    });

    mc1_calc();

    function mc1_calc(){
        mc1_getInputs();
        if(mc1_in_1 && mc1_in_2){
            mc1_in_1 = mc1_removeSign(mc1_in_1);
            mc1_in_2 = mc1_removeSign(mc1_in_2);

            mc1_rs_1 = mc1_in_2/mc1_in_1;

            $("#mc1_rs_1").text(mc1_nftd.format(mc1_rs_1*100)+"%");

        } else {
            $("#mc1_rs_1").text("-");
        }
    }

    function mc1_getInputs(){
        mc1_in_1 = $("#mc1_in_1").val();
        mc1_in_2 = $("#mc1_in_2").val();
    }

    function mc1_removeSign(vl){
        return Number(vl.replace(/,/g,''));
    }
});