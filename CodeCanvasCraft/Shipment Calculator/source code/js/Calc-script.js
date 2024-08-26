jQuery(document).ready(function ($) {
    let cal_inputs, ms_units = "in", w_units = "lbs", type = 1;
    let air_cost = 3.75;
    let sea_cost = 13.90;

    const nft = Intl.NumberFormat('en-US',{
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });
    const nftd = Intl.NumberFormat('en-US',{
        minimumFractionDigits:2,
        maximumFractionDigits:2
    });

    $(".ms-units").on("click", function(){
        $(".ms-units").removeClass("active");
        $(this).addClass("active");

        let vl = $(this).data("value");
        ms_units = vl;
        $(".m-units").text(vl);
        calculate();
    });

    $(".w-units").on("click", function(){
        $(".w-units").removeClass("active");
        $(this).addClass("active");

        let vl = $(this).data("value");
        w_units = vl;
        $("#w_unit").text(vl);
        calculate();
    });

    // $('.ms-slider').on('input', function () {
    //     var min = Number(e.target.min),
    //     max = Number(e.target.max),
    //     vl = Number(e.target.value),
    //     val = Number(e.target.value);

    //     let vl = Number($(this).val());
    //     let fID = $(this).attr('id');
    //     $('#'+fID+"_vl").val(vl);
    //     calculate();
    // });

    $(".ms-slider").on("input", function (e) {
        var min = Number(e.target.min),
            max = Number(e.target.max),
            vl = Number(e.target.value),
            val = Number(e.target.value);
            
        let in_id = $(this).attr("id");

        // if(in_id == "cal_in_r1"){
        //     $("#"+in_id+"_vl").text(vl);
        // }else {  
        //     $("#"+in_id+"_vl").text(vl);
        // }

        $("#"+in_id+"_vl").val(vl); 
    
        if (min == 0) {
            min = min + 1;
            max = max + 1;
            val = val + 1;
        }

        let bg_size = ((val - min) * 100) / (max - min);

        

        $(e.target).css({
            backgroundSize: bg_size + "% 100%",
        });
        
        calculate();
    }).trigger("input");

    $('.s-vl').on('input', function () {
        let vl = Number($(this).val());
        let rid = $(this).data("id");

        if(vl < 0){
            $(this).val(0);
            vl = 0;
        } else if(vl > 250){
            $(this).val(250);
            vl = 250;
        }
        
        $("#"+rid).val(vl);
        calculate();
    });

    $('.ws-vl').on('input', function () {
        let vl = Number($(this).val());
        let rid = $(this).data("id");

        if(vl < 0){
            $(this).val(0);
            vl = 0;
        } else if(vl > 500){
            $(this).val(500);
            vl = 500;
        }
        
        $("#"+rid).val(vl);
        calculate();
    });

    $('#cal_in_4').on('change', function () {
        calculate();
    });

    function calculate(){
        get_inputs();

        hm_in_1 = cal_inputs[4];
        hm_in_2 = cal_inputs[3];
        hm_in_3 = cal_inputs[0];
        hm_in_4 = cal_inputs[1];
        hm_in_5 = cal_inputs[2];

        if(hm_in_1 != "" && hm_in_2 != "" && hm_in_3 != "" && hm_in_4 != "" && hm_in_5){
            hm_in_1 = Number(hm_in_1);
            hm_in_2 = Number(hm_in_2);
            hm_in_3 = Number(hm_in_3);
            hm_in_4 = Number(hm_in_4);
            hm_in_5 = Number(hm_in_5);

            if(ms_units == "cm"){
                hm_in_3 = Number(hm_in_3 * 0.393701);
                hm_in_4 = Number(hm_in_4 * 0.393701);
                hm_in_5 = Number(hm_in_5 * 0.393701);
            }

            if(w_units == "lbs"){
                hm_in_2 = Number(hm_in_2*0.453592);
            }

            let volume = hm_in_3 * hm_in_4 * hm_in_5;

            let cost = 0;

            if(hm_in_1 == 1){
                volume = volume / 166;
                cost = (volume < hm_in_2) ? hm_in_2*air_cost : volume*air_cost;
                $("#rs_vl").text("$"+nftd.format(cost));
            } else if(hm_in_1 == 2){
                volume = volume / 1728;
                cost = volume*sea_cost;
                $("#rs_vl").text("$"+nftd.format(cost));
            }
            
        } else {
            $("#rs_vl").text("-");
        }
    }

    function get_inputs(){
        cal_inputs = [];
        $('.ms-slider').each(function(){
            let vl = Number($(this).val());
            cal_inputs.push(vl);
        });
        let v = $('#cal_in_4').val();
        cal_inputs.push(v);
    }
});