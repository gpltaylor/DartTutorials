define(['durandal/viewEngine', 'durandal/system', 'jquery', 'plugins/router'], function (sut, system, $, router) {

    describe('plugins/router', function () {
        it('Standard routeStringToRegExp', function () {
            console.info(router);
            var value = router.routeStringToRegExp("testyou");
            expect((value).toString()).toBe("/^testyou$/");
        });

        it('Splat routeStringToRegExp', function () {

            var value = router.routeStringToRegExp("testyou*details");
            expect((value).toString()).toBe("/^testyou(.*?)$/");
        });

        it('Optional Parameter routeStringToRegExp', function () {
            var route = "level1(/:id)";
            var value = router.routeStringToRegExp(route);
            expect((value).toString()).toBe("/^level1(?:/([^/]+))?$/");
        });

    });


});