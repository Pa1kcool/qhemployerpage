function follow(from_guy,to_guy)
{
    //alert("Hi. Follow initiated");
    $.ajax({
            type: "POST",
            url: "https://quantumhunts.com/people/follow/",
            dataType: "json",
            data: {from_follow:from_guy,to_follow:to_guy},            
            success : function(data){
                //alert(data.code);
                //alert(data.msg);
                if (data.code == "200")
                {
                    let hy="-";
                    let res = from_guy.concat(hy);
                    let third=res.concat(to_guy)
                    
                    //alert(third);
                    
                    var a = document.getElementById(third);
                    if(a)
                    {
                       // alert("ID exists");
                    }
                    else
                    {
                        //alert("ID does not exist");
                    }
                    
                    //alert("Success: " +data.msg);
                    $("#"+third).html("Following");
                    $("#"+third).removeClass('btn-primary');
                    $("#"+third).addClass('btn-primary-green');      
                    
                    /*
                    $("#job<?php echo $jobs_id; ?>").html('Applied');
                    $("#job<?php echo $jobs_id; ?>").removeClass('btn-primary');
                    $("#job<?php echo $jobs_id; ?>").addClass('btn-success');
                    $(".apply-display-error").html(" ");
                    $(".apply-display-error").hide();
                     $(".apply-display-success").show();
                    $(".apply-display-success").html(""+data.msg+"");
                    $(".apply-display-success").css("display","block");
                    */
                } 
                else
                {
                    //alert(data.code);
                    alert("Perhaps you already follow this user or you are not logged in yet.");
                    /*
                    $(".apply-display-success").html(" ");
                    $(".apply-display-success").hide();
                    $(".apply-display-error").show();
                    $(".apply-display-error").html(""+data.msg+"");
                    $(".apply-display-error").css("display","block");
                    */
                    
                }                 
            }
        });
    
    
}



function viewconnection(connection_of_user)
{
    //alert("Hey. My connections are here.");
    $('#connections-modal').modal('show');
    
    $("#followers").load("https://quantumhunts.com/people/followers/?user="+connection_of_user);        
    $("#following").load("https://quantumhunts.com/people/following/?user="+connection_of_user);            
    
}


function loadconnection(connection_of_user)
{
    //alert("loading");
    $("#connectionssummary").load("https://quantumhunts.com/people/connections/?user="+connection_of_user+"&opt=followers");
    $("#thatfollowing").load("https://quantumhunts.com/people/connections/?user="+connection_of_user+"&opt=following");
    $("#thatfollowers").load("https://quantumhunts.com/people/connections/?user="+connection_of_user+"&opt=followers");
}    




function mainfollow(pri,sec)
{ 
    //alert("Hi mainfollow");
    $("#mainfollow").load("https://quantumhunts.com/people/mainfollow/?pri="+pri+"&sec="+sec);    
}

