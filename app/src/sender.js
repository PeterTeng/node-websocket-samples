$(document).ready(function() {
  var webSocket = new WebSocket('ws://localhost:9000');

  webSocket.addEventListener("open", function(event) {
    window.notify_bar("Connected to Socket Server.");
  });

  // Actions on DOM
  $('.send-msg-btn').on("click", function() {
    webSocket.send("Clicked!");

    // Change color on clicking send message button
    $(this).css('background-color', 'rgba(22, 62, 195, 1.0)');
    return setTimeout(function() {
      return $('.send-msg-btn').css('background-color', 'rgba(22, 62, 195, 0.75)');
    }, 250);
  })
});
