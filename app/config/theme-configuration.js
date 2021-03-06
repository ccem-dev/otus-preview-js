(function() {

    angular
        .module('otusjs.player.config')
        .config(themeConfiguration);

    themeConfiguration.$inject = ['$mdThemingProvider', '$mdIconProvider'];

    function themeConfiguration($mdThemingProvider, $mdIconProvider) {

        // $mdThemingProvider.theme('layoutTheme')
        //     .primaryPalette('blue', {
        //         'default': 'A200',
        //         'hue-1': '200',
        //         'hue-2': '50',
        //         'hue-3': '700'
        //     }).accentPalette('blue-grey', {
        //         'default': '900',
        //         'hue-1': '50'
        //     }).warnPalette('red');


        /*Configuration icons*/
        /* 24 is the size default of icons */
        $mdIconProvider.defaultIconSet('app/assets/icons/mdi.svg', 24);
    }

}());
