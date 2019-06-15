var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.stopSpinner();
    App.fetch();
  },

  fetch: function (callback = () => {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      MessagesView.initialize(data.results);
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};