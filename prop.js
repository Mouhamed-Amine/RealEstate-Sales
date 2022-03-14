"use strict"

$(document).ready(function(){

$("select").change(function(){
if($(this).val()=='a'){

    $('textarea').text("A self-occupied house property is used for one’s own residential purposes. This may be occupied by the taxpayer’s family – parents and/or spouse and children. A vacant house property is considered as self-occupied for the purpose of Income Tax.").css
    ("color","black");
    
}else 
    if($(this).val()=='b')
    $('textarea').text("A house property which is rented for the whole or a part of the year is considered a let out house property for income tax purposes");
    else
    $('textarea').text("An inherited property i.e. one bequeathed from parents, grandparents etc again, can either be a self occupied one or a let out one based on its usage as discussed above.");
    
});


});
