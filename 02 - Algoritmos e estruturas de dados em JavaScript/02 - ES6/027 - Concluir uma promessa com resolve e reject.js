const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa uma resposta de um servidor
  let responseFromServer;

  if(responseFromServer) {
    // Altere esta linha
    resolve("We got the data");
  } else {  
    // Altere esta linha
    reject("Data not received");
  }
});