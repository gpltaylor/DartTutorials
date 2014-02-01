define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Sorry but our search is not yet implemented... Please checkout the tutorials page');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
              { route: 'Tutorials(/:page)', title:'Tutorials', moduleId: 'viewmodels/tutorials', nav: true, hash: '#Tutorials' }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});