
$(document).ready(function(){
    var fName, lName, description, addContact, addDesc;

    $(document).on("click", "#submit", function(e){
        
        e.preventDefault();
        fName = $("#first_name").val();        
        lName = $("#last_name").val();
        description = $("#form_desc").val();
        // console.log(fName + " " + lName + " " + description);
                
        addContact = `<div><div class='contactDiv'><h1>${fName} ${lName}</h1><p>Click for description</p></div><br><div class='descDiv'><p>${description}</p></div></div>`;

        $("#displayDiv").append(addContact);

        $("#first_name").val("");
        $("#last_name").val("");
        $("#form_desc").val("");        
    });
    
  
    $(document).on("click", ".contactDiv", function(){   
        $(this).hide();
        $(this).siblings('.descDiv').show();

    });
  
});
