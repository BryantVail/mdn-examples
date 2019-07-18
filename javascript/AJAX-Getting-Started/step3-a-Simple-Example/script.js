// script.js

// Let's put it all together with a simple HTTP request. Our JavaScript will request an HTML document, "test.html", which contains the text "I'm a test."  
// Then we'll 'alert()' the contents of the response. Note that this example uses vanilla JavaScript — no jQuery is involved. 
// Also, the HTML, XML and PHP files should be placed in the same directory.

(function(){
    var httpRequest;
    document.getElementById("ajaxButton").onclick = function(){
        let username = document.getElementById('username').value;
        makeRequest('test.php', username);
    }

    function makeRequest(url, username){
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
        //url is passed in to fn 'makeRequest'
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader(
            'content-type', 'application/x-www-form-urlencoded'
        );
        //send
        httpRequest.send();

        //local function
        function alertContents(){
            try {
                if(httpRequest.readyState === XMLHttpRequest.DONE){
                    if(httpRequest.status ===200){
                        //return text from the resource
                        let xmldoc = httpRequest.responseXML;
                        let rootNode = xmldoc.getElementsByTagName("root").item(0);
                        alert(rootNode.firstChild.data);
                    }else{
                        alert("There was a problem with the request");
                    }
                }//end if
            } catch (error) {
                alert("Caught Exception: " + error.description);                
            }
        }//end alertContents
    }//end makeRequest
})();












