var RoomsView = {

  list: new Set(),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function (msgArray = []) {
    RoomsView.render(msgArray);
    RoomsView.$button.on('click', function() {
      var roomToAdd = $('#message')[0].value;
      RoomsView.renderRoom(roomToAdd);
    });
    
  },
  
  render: function (msgArray) {
    for (let i = 0; i < msgArray.length; i++) {
      let message = msgArray[i];
      RoomsView.renderRoom(message.roomname);
    }
  },
  
  renderRoom: function (newRoom) {

    const isSafe = function (str) {
      return !/[\/&<>\?]/g.test(str);
    };
    if (isSafe(newRoom)) {
      if (!RoomsView.list.has(newRoom)) {
        RoomsView.list.add(newRoom);
        var result = `<option value="${newRoom}">${newRoom}</option>`;
        RoomsView.$select.append(result); 
      }
    }
  }
};