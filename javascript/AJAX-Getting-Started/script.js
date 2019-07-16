//script.js

//old compatibility code, 
    //no longer needed
if(window.XMLHttpRequest){
    httpRequest = new XMLHttpRequest();
}else if( window.ActiveXObject){//ie6 & older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.onreadystatechange = function(){
    //process server response here
};

                //method, url, asyncBoolean
httpRequest.open("GET", "http://google.com", true);

httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//do above before typing 'send'
httpRequest.send();

//receive response
    // check: [
    //  0: unanitialized; 'request not initialized'
    //  1: loading; server connection established
    //  2: loaded; request received
    //  3: interactive; processing request
    //  4: complete; request finished & response ready
    // ]
if(httpRequest.readyState === XMLHttpRequest.DONE){
    // Everything is good, response received
} else {
    // not ready yet
}

if(httpRequest.status === 200){
    //great
}else{
    //problem w/request
    //404 not found perhaps 
    //500 internal server error
}

// Response

// responseText
// returns the server response as a string of text
httpRequest.responseText();

// responseXML
httpRequest.responseXML();















