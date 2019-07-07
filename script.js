function main() 
{
    console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");
    $.ajax
    ({
        dataType: "json",
        url: "http://192.168.6.195:3001",
        success: function(data) 
        {
            console.log("log response on success");
            console.log(data);
        }
    });
}

main();