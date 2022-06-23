$(document).ready(function () {
    $(".heart").click(function (e) { 
        e.preventDefault();
        $(this).children("svg").toggleClass("fas");
    });
});