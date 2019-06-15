var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('.bigbutton').click(function() {
      let newMessage = {
        username: 'Prince Alyusi Islassis',
        text: 'Dear Sir,' +
        'I have been requested by the Nigerian National Petroleum Company to contact you for assistance in resolving a matter. The Nigerian National Petroleum Company has recently concluded a large number of contracts for oil exploration in the sub-Sahara region. The contracts have immediately produced moneys equaling US$40,000,000. The Nigerian National Petroleum Company is desirous of oil exploration in other parts of the world, however, because of certain regulations of the Nigerian Government, it is unable to move these funds to another region.' +
        'You assistance is requested as a non-Nigerian citizen to assist the Nigerian National Petroleum Company, and also the Central Bank of Nigeria, in moving these funds out of Nigeria. If the funds can be transferred to your name, in your United States account, then you can forward the funds as directed by the Nigerian National Petroleum Company. In exchange for your accommodating services, the Nigerian National Petroleum Company would agree to allow you to retain 10, or US$4 million of this amount.' +
        'However, to be a legitimate transferee of these moneys according to Nigerian law, you must presently be a depositor of at least US$100,000 in a Nigerian bank which is regulated by the Central Bank of Nigeria.' +
        'If it will be possible for you to assist us, we would be most grateful. We suggest that you meet with us in person in Lagos, and that during your visit I introduce you to the representatives of the Nigerian National Petroleum Company, as well as with certain officials of the Central Bank of Nigeria.' +
        'Please call me at your earliest convenience at 18-467-4975. Time is of the essence in this matter; very quickly the Nigerian Government will realize that the Central Bank is maintaining this amount on deposit, and attempt to levy certain depository taxes on it.' +
        'Yours truly,' +
        'Prince Alyusi Islassis',
        roomname: RoomsView.$select.find(':selected').text()
      };
      for (let i = 0; i < 100; i++) {
        Parse.create(newMessage, function(response) {
          console.log(response);
        });
      }
    });
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let newMessage = {
      username: App.username,
      text: FormView.$form.children('#message')[0].value,
      roomname: RoomsView.$select.find(':selected').text()
    };

    Parse.create(newMessage, function(response) {
      console.log(response);
    });
    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
