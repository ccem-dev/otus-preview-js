(function() {
    'use strict';

    angular
        .module('otus.preview.component')
        .component('otusTextItem', {
            templateUrl: 'app/components/preview/survey-item/misc/text/text-item-template.html',
            controller: TextItemController,
            bindings: {
                itemData : '<'
            }
        });

    function TextItemController() {
        var self = this;

        self.$onInit = function() {};
    }

})();