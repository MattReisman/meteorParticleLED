if (Meteor.isClient) {
    Session.setDefault('deviceID', 123456789101112131415161);
    Session.setDefault('accessToken', 1234567891011121314151611234567891011121);

  Template.core.helpers({
    // tester: function() {
    //   var document = "test";
    //   return document;
    // },
    device: function() {
      return Session.get('deviceID');
    },
    token: function() {
      return Session.get('accessToken');
    }
  });

  Template.core.events({
    'submit form': function(e) {
      e.preventDefault();
      // Session.set('deviceID', document.);
      var userDevice = $(e.target).find('[name=device-id]').val();
      var userToken = $(e.target).find('[name=access-token]').val();
      Session.set('deviceID', userDevice);
      Session.set('accessToken', userToken);
    }
  });
}
