jQuery(function($){
    $("#d_date").datepicker({
        dateFormat: "MM dd, yy"
    });

    $("body").on("click", "#calcBtn", function(e) {
            e.preventDefault();

            var min_date = get_date(59),
                max_date = get_date(65),
                average_days = get_date(63);

            document.getElementById("min_date").innerHTML = min_date;
            document.getElementById("max_date").innerHTML = max_date;
            document.getElementById("average_days").innerHTML = average_days;
            document.getElementById("ext_date").innerHTML = average_days;

        });

        function get_date(shift) {
            var dog_date = $("#d_date").datepicker("getDate"),
                d = dog_date;
                d.setDate(d.getDate() + shift);

            return $.datepicker.formatDate("MM dd, yy", d);
        }
        
});