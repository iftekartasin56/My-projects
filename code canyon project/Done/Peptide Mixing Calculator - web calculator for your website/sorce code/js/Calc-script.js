jQuery(document).ready(function($){
    let scale_num = 30;
    
    calcFunc();

    $("#in_1").on("change", function(){
    let vl = Number($(this).val());

    scale_num = vl*100;
    calcFunc();
    
});

    $("#in_2").on("change", function(){
    let vl = Number($(this).val());

    if(vl == -1){
        $("#in_2_other").removeClass("ds-none");
    } else {
        $("#in_2_other").addClass("ds-none");
    }
    calcFunc();
    });

    $("#in_3").on("change", function(){
    let vl = Number($(this).val());

    if(vl == -1){
        $("#in_3_other").removeClass("ds-none");
    } else {
        $("#in_3_other").addClass("ds-none");
    }
    calcFunc();
    });

    $(".cl-in").on("input", function(){
    calcFunc();
    });

    function calcFunc(){
    in_1 = Number($('#in_1').val());
    in_2 = Number($('#in_2').val());
    in_3 = Number($('#in_3').val());
    in_4 = Number($('#in_4').val());

    if(in_2 == -1) in_2 = Number($('#in_2_other').val());
    if(in_3 == -1) in_3 = Number($('#in_3_other').val());

    if(in_1 && in_2 && in_3 && in_4){
        let a = in_2 * 1000;
        let b = in_3 * 100;
        let c = a/b;
        let n = Math.round(in_4 / c);

        let wd = n * (100/scale_num);

        wd = wd > 100 ? 100 : wd;

        $(".scale_img").addClass("ds-none");
        $("#scale_"+ scale_num).removeClass("ds-none");
        $("#scale_prog").css("width", wd + "%");
        
        n = n > scale_num ? scale_num : n;

        $("#in_4_show").text(in_4);
        $("#rs_1").text(n);

        $("#rs_sec").removeClass("ds-none");
    } else {
        $("#rs_sec").addClass("ds-none");
    }
    }
});