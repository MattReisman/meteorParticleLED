if (Meteor.isClient) {

  Session.setDefault('lightState', 0);

  Template.hello.helpers({
    lightState: function () {
      Meteor.http.get("https://api.particle.io/v1/devices/53ff70066667574834302067/lights?access_token=dcb98d8057f3a74e2234d4a44a80cbfbafb3d183", function (err, data ){
        console.log(data.data.result );
        Session.set('lightState', data.data.result);
      });
      if(Session.get('lightState')==1) {
        document.getElementById("lightButton").value="Turn OFF";
      } else {
        document.getElementById("lightButton").value="Turn ON";
      }
      return Session.get('lightState');
    }
  });

  Template.hello.events({
    'click button': function () {
      Meteor.http.post("https://api.particle.io/v1/devices/53ff70066667574834302067/toggleLight?access_token=dcb98d8057f3a74e2234d4a44a80cbfbafb3d183", function (err, data ){
        console.log("HTTP POST response received");
        console.log(data);
        Session.set('lightState', data.data.result);
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
