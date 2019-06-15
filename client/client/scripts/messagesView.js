var MessagesView = {

  chatBox: new Messages,
  $chats: $('#chats'),
  //this.chatBox.setMessages(msgArray);
  initialize: function (msgArray = defualtMessages) {
    MessagesView.chatBox.setMessages(msgArray);
    MessagesView.render();
    RoomsView.initialize(msgArray);
  },

  render: function (roomName) {
    let currentStream = MessagesView.chatBox.getMessages();
    MessagesView.$chats.empty();

    for (let i = 0; i < currentStream.length; i++) {
      MessagesView.renderMessage(currentStream[i]);
    }
  },

  renderMessage: function (message) {
    let username = message.username;
    let text = message.text;

    const isSafe = function (str) {
      return !/[\/&<>]/g.test(str);
    };

    if (isSafe(username) && isSafe(text)) {

      var result = `<div class='chat'>
      <div class="username">${(username)}</div>
      <div>${(text)}</div>
      </div>`;
      // MessagesView.render(result)
      MessagesView.$chats.append(result);

    }

  }

};
