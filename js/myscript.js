var count = 0;

var deleteTask = function(idnum){
    $(idnum).remove();
}

var addDeleteOption = function(idnum)
{
    var ul = document.createElement("ul");
    ul.setAttribute("type","button");
    ul.setAttribute("class","btn btn-sm btn-danger");
    ul.setAttribute("onclick","deleteTask('"+idnum+"')");

    var t = document.createTextNode("X");
    ul.appendChild(t);
    $(".tasklist li:last").append(ul);
}

var addCheckBox = function()
{
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("autocomplete","off");
    $(".tasklist li:last").append(input);
          //<input type ="checkbox" autocomplete= "off">
}

var createTask = function()
{   
    var task = $("#taskinput").val();
    var description = $("#taskdescript").val();
    if(description != ""){task = task +  " : " + description;}
    var text = document.createTextNode(task);
    var sentence = document.createElement("label");
    sentence.appendChild(text);

    var list = document.createElement("li");
    list.setAttribute("id",count);
    list.setAttribute("type","disc");
    list.appendChild(sentence);

    $(".tasklist").append(list);
    addCheckBox();
    addDeleteOption("#"+count);
    count = count + 1;
    $("#taskinput").val(''); //Empty the input box
    $("#taskdescript").val('');
}