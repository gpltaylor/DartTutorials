define(['plugins/router', 'durandal/app','knockout'], function (router, app, ko) {
  var name = "Tutorials Page";
  var pagename = ko.observable("");
  var defaultpage = "tutorials/home.html";

  var activate = function(page) {
    if(page !== null && page!==undefined) {
      pagename( "/tutorials/" + page.toLowerCase() + ".html");
    } else {
      // Load default page
      pagename(defaultpage);
    }
    
    app.title = page;
    //window.history.pushState('','',pagename() );
    //window.history.popState();
  };
  
  return {
    name: name,
    pagename: pagename,
    activate: activate
  };

});