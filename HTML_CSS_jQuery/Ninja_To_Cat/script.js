// console.log($);
// console.log($("img"));

// $(document).ready(function(){
//     $("img").click(function(){
//         // console.log("data-alt-src: " + $(this).attr("data-alt-src"));
//         var newSrc = $(this).attr("data-alt-src");
//         console.log(newSrc);
//         $(this).attr({
//             src: "images/"+newSrc
//         });
//     }); 
// });


$(document).ready(function(){
    $("img").click(function(){
        $(document).on("click", "img", function(){
            var oldSrc = $(this).attr("src");      
            var newSrc = $(this).attr("data-alt-src");      
                    // console.log(newSrc);      
            $(this).attr({
                src: newSrc
            });
            $(this).attr("data-alt-src", oldSrc);
        });        
    }); 
});