$(document).ready(function() {
    $(".tab-titles a:first").addClass(".activebg");
    $(".tab-titles a").click(function() {
        $(".tab-titles a").removeClass("activebg");
        $(this).addClass("activebg");
    });

    $(function() {
        $('.changeDiv').click(function() {
          $('.currentDiv').hide();
          $('#div' +$(this).attr('target')).show();
        });
    });
});