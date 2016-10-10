var count = 0;

var deleteTask = function(idnum){
    $(idnum).remove();
}

var addDeleteOption = function(idnum)
{
    var ul = $("<ul></ul>").attr("type","button").attr("class",
        "btn btn-sm btn-danger").attr("onclick","deleteTask('"+idnum+"')");
    ul.append("X");
    $(".tasklist li:last").append(ul);
}

var addCheckBox = function()
{
    var input = $("<input>").attr("type","checkbox").attr("autocomplete","off");
    $(".tasklist li:last").append(input);
}

var showPopup = function(input)
{
    // Reset the popups
    $("body div.alert").remove()

    var closeButton = $("<a>x</a>").attr("class","close").attr("data-dismiss","alert").attr("aria-label","close");
    var popup = $("<div></div>");
    if(input == ""){
        var statement = "<strong>Error!</strong> No Task is Entered";
        popup.attr("class","alert alert-danger fade in");
    } else{
        var statement = "<strong>Success!</strong> Task:" + input + " is added";
        popup.attr("class","alert alert-success fade in");
    }
    popup.append(closeButton).append(statement);
    $("body nav").after(popup);
}

var createTask = function()
{   
    var task = $("#taskinput").val();
    showPopup(task);
    if(task == "") {return;}

    var description = $("#taskdescript").val();
    if(description != ""){task = task +  " : " + description;}
    var sentence = $("<label>").append(task);

    var list = $("<li>").attr("id",count).attr("type","disc").append(sentence);
    $(".tasklist").append(list);

    addCheckBox();
    
    //Count Task numbers and enumerate them to ID's
    addDeleteOption("#"+count);
    count = count + 1;

    //Empty the input box
    $("#taskinput").val('');
    $("#taskdescript").val('');
}

// $(document).ready(function(){
//     $('#addtaskButton').click(function(){
//         window.alert(5+6)
//         //var popup = $(this).fadeIn(400);
//         //$("#myModal").attr("data-toggle","modal");
//     });
// });