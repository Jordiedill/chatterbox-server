class Messages {

  constructor() {
    this.storage = [{
      createdAt: '2019-06-07T13:54:52.649Z',
      roomname: 'Basic Room',
      objectId: 'NPAUObdXoM',
      text: 'This is the newest message',
      updatedAt: '2019-06-07T13:54:52.649Z',
      username: 'Firsty'
    },
    {
      createdAt: '2019-06-07T13:54:50.649Z',
      objectId: 'FYp06gSFy3',
      roomname: 'Middle Room',
      text: 'This is the middle message',
      updatedAt: '2019-06-07T13:54:50.649Z',
      username: 'Middle Aged'
    },
    {
      createdAt: '2019-06-07T13:54:50.649Z',
      objectId: 'FYp06gSFy3',
      roomname: 'Basic Room',
      text: 'This is the oldest message',
      updatedAt: '2019-06-07T13:54:50.649Z',
      username: 'Old Timer'
    }
    ];
  }

  setMessages(messagesArray) {
    this.storage = messagesArray;
  }

  getMessages(room = '') {

    //add room selection logic

    return this.storage;

  }

}