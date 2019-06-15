var MessageView = {

  renderMessage: function (message) {
    var result = `<div class="chat">
      <div class="username">${message.username}</div>
      <div>${message.text}</div>
      </div>`;
    return result;
  }

};