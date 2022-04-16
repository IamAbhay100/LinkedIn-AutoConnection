(function () {
    var connection = document.getElementsByClassName('artdeco-button')
    for (let i = 0; i < connection.length; i=i+1) {
      connection[i].click()
  
    document.body.appendChild(connection)
    }
})()