define(['plugins/router', 'durandal/app','knockout','service/datacontext'], function (router, app, ko, datacontext) {
  var name = "Add Member";
  
  var firstname = ko.observable("");
  var surname = ko.observable("");
  var age = ko.observable("");
  
  var addMember = function() {
    datacontext.addMember( {firstname: firstname(), surname: surname(), age: age() } );
    router.navigate("Members");
  };
  
  return {
    name: name,
    firstname: firstname,
    surname: surname,
    age: age,
    addMember: addMember
  };

});