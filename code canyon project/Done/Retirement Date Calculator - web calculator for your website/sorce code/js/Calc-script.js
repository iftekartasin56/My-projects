jQuery(document).ready(function($){
    let curr_symbol = "$";

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });
    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits:2,
        maximumFractionDigits:2
    });

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $("#cl_in_1, #cl_in_2, #cl_in_3, #cl_in_4").on("keyup change", function(){
        let vl = removeSign($(this).val());

        $(this).val(nft.format(vl));
        
        calc();
    });
    $("#cl_in_5, #cl_in_6, #cl_in_7").on("keyup change", function(){
        let vl = Number($(this).val());

        if(vl < 0){
            $(this).val(0);
        } else if(vl > 100){
            $(this).val(100);
        }
        calc();
    });

    calc();

    $(".curr-sign").text(curr_symbol);

    function calc(){
        getInputs();
        if(cl_in_1 && cl_in_2 && cl_in_3 && cl_in_4 && cl_in_5 && cl_in_6 && cl_in_7){
            cl_in_1 = removeSign(cl_in_1);
            cl_in_2 = removeSign(cl_in_2);
            cl_in_3 = removeSign(cl_in_3);
            cl_in_4 = removeSign(cl_in_4);
            cl_in_5 = removeSign(cl_in_5);
            cl_in_6 = removeSign(cl_in_6);
            cl_in_7 = removeSign(cl_in_7);

            rs_1 = cl_in_2-cl_in_4;
            rs_2 = cl_in_4/cl_in_2;
            rs_3 = (rs_1-cl_in_3)*(100/cl_in_7);
            rs_4 = (1/(Math.log(1+((cl_in_5-cl_in_6)/100))))*(Math.log((((cl_in_4+(rs_3*((cl_in_5-cl_in_6)/100)))/(cl_in_4+(cl_in_1*((cl_in_5-cl_in_6)/100)))))));

            let today = new Date();
            let numberOfDaysToAdd = rs_4 * 365;
            today.setDate(today.getDate() + numberOfDaysToAdd);

            rs_5 = monthNames[today.getMonth()]+" "+today.getDate()+", "+today.getFullYear();
            rs_6 = rs_3*Math.pow((1+(cl_in_6/100)),rs_4);

            if(cl_in_1 > rs_3){
                $("#r_msg").slideDown();
                $("#rs_1, #rs_2, #rs_3, #rs_4, #rs_5, #rs_6").text("-");
            } else {
                $("#r_msg").hide();
                $("#rs_1").text(curr_symbol + nft.format(rs_1));
                $("#rs_2").text(nft.format(rs_2*100)+"%");
                $("#rs_3").text(curr_symbol + nft.format(rs_3));
                $("#rs_4").text(nftd.format(rs_4));
                $("#rs_5").text(rs_5);
                $("#rs_6").text(curr_symbol + nft.format(rs_6));
            }

        } else {
            $("#rs_1, #rs_2, #rs_3, #rs_4, #rs_5, #rs_6").text("-");
        }
    }

    function getInputs(){
        cl_in_1 = $("#cl_in_1").val();
        cl_in_2 = $("#cl_in_2").val();
        cl_in_3 = $("#cl_in_3").val();
        cl_in_4 = $("#cl_in_4").val();
        cl_in_5 = $("#cl_in_5").val();
        cl_in_6 = $("#cl_in_6").val();
        cl_in_7 = $("#cl_in_7").val();
    }

    function removeSign(vl){
        return Number(vl.replace(/,/g,''));
    }
});