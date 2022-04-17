
$(document).ready(function(){
//$(".transfer-link").click(function(){
    $(document).on('click', ".transfer-link", function () {
        //alert("aaa");
        var player = $(this).closest('td').find('span.player').text();
        var transferTableId = $( this ).attr('transfer-table-id');
        $(this).parent().parent().remove();
    
        if(transferTableId == "tableatob" || transferTableId == "tablectob") {
            $("#tableb").append('<tr>' +
                                '<td><span class="transfer-link" '+'transfer-table-id="tablebtoa"><a '+'href="#"><</a><span '+'class="player">' + player +'</span></span><span '+'class="transfer-link" '+'transfer-table-id="tablebtoc"><a '+'href="#">></a></span></td>'
                                +'</tr>');
        } else if(transferTableId == "tablebtoa"){
            $("#tablea").append('<tr>' +
                                 '<td><span class="player">' + player 
                                 +'</span><span class="transfer-link" '+'transfer-table-id="tableatob"><a ' 
                                 +' href="#">></a></span></td>'
                                 +'</tr>');
        }else if(transferTableId == "tablebtoc"){
            $("#tablec").append('<tr>' +
                                '<td><span class="transfer-link" ' + 'transfer-table-id="tablectob"><a '+'href="#"><</a></span><span '+'class="player">'+ player + '</span></td>'
                                +'</tr>');
        }
        
      });

      $("#resetTeam").click(function(){
        location.reload(true);
      });

      $("#saveTeam").click(function(){
        var dataList;
        var recordList; 
        var i = 0;
        
        $('#tablea tr').each(function() { 
            var team = $(this).find('th').closest('th').text();
            alert(team);
            $(this).find('td').each (function() {   
                var player = $(this).closest('td').find('span.player').text();
            alert(player);

          
        }); 
      });
    });
});

