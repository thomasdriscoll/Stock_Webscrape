$(document).ready(function() {
  $('#submitBtn').click(function() {
    //Add more data to JSON obj as parameters become more refined
    var json_obj = { 'stock' : document.getElementById('stock').value};
    console.log(json_obj);
    $.ajax({type: 'POST',
           contentType: 'application/json; charset=utf-8',
           url: '/get_stock',
           data: JSON.stringify(json_obj),
           success: function(data, textStatus, jqXHR){
             document.getElementById('output').value = $.parseJSON(jqXHR.responseText);
           },
           error: function(){
             document.getElementById('output').value = "Failure";
           }
    });
  })
});
