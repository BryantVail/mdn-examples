// script.js

// Let's put it all together with a simple HTTP request. Our JavaScript will request an HTML document, "test.html", which contains the text "I'm a test."  
// Then we'll 'alert()' the contents of the response. Note that this example uses vanilla JavaScript — no jQuery is involved. 
// Also, the HTML, XML and PHP files should be placed in the same directory.

(function(){
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);

    function makeRequest(){
        //initialize XMLHttpRequest object
        httpRequest = new XMLHttpRequest();

        //verify httpRequest was created/initiated
        if(!httpRequest){
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        //if above is not true 
        // and the function does not 'return'
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'test.html');
        // httpRequest.setRequestHeader('content-type', 'application/text');
        httpRequest.send();

        //local function
        function alertContents(){
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status ===200){
                    //return text from the resource
                    alert(httpRequest.responseText);
                }else{
                    alert("There was a problem with the request");
                }
            }
        }//end alertContents
    }//end makeRequest
})();












