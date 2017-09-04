// console.log($);
// console.log($("img"));

$(document).ready(function(){
    var fName, lName, email, contact, tableRow;

    $("button").click(function(){
        fName = $("#first_name").val();
        lName = $("#last_name").val();
        email = $("#email_address").val();
        contact = $("#contact_no").val();
        // console.log(fName + " " + lName + " " + email +" " + contact);
        
        tableRow = "<tr><td>" + fName + "</td><td>" + lName + "</td><td>" + email + "</td><td>" + contact + "</td></tr>"

        $("#userListTable table tbody").append(tableRow);        

        $("#first_name").val("");
        $("#last_name").val("");
        $("#email_address").val("");
        $("#contact_no").val("");
    });
  
});
