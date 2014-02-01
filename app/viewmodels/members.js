define(['plugins/router', 'durandal/app','knockout','service/datacontext'], function (router, app, ko, datacontext) {
  var name = ko.observable("Membership List");
  var description = "List of members currently authorised to use this service";
  var members = ko.observableArray([]);
  var dataContextPerson;
  var loaded = false;
  
  var activate = function() {
    if(loaded === true) { return; }

    members.removeAll();
    datacontext.getMembers(members);
    
    loaded = true;
  };
  
  var addMember = function() {
    router.navigate("/Member");
  };
  
  return {
    name: name,
    description: description,
    members: members,
    activate: activate,
    addMember: addMember
  };
});