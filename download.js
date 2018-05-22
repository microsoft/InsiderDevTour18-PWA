






var addFiletoCache = function(action){

  if(!navigator.serviceWorker){
     return new Promise(function(resolve, reject) {resolve({message:'noSW'})});
  }


if(action == 'checkURL'){

  //  var getURL = document.querySelector('.moviePlayer video').src;
    var myPostMessage = {action:'checkURL', url:'https://southridge.azurewebsites.net/smallClip.mp4'}
}else{

var getURL = document.querySelector('.moviePlayer video').src;
    var myPostMessage = {action:'downLoadVideo', url:getURL}

}



//navigator.serviceWorker.controller.postMessage(postMessage);


  return new Promise(function(resolve, reject) {
    var messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = function(event) {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };


    navigator.serviceWorker.controller.postMessage(myPostMessage, [messageChannel.port2]);
  });

};