(function() {
    'use strict';

    angular
        .module('otusjs.player.service')
        .service('TagComponentBuilderService', TagComponentBuilderService);

    TagComponentBuilderService.$inject = ['HtmlBuilderService'];

    function TagComponentBuilderService(HtmlBuilderService) {
        var self = this;

        self.createTagElement = createTagElement;

        function createTagElement(elementType) {
            return _replace(HtmlBuilderService.generateTagName(elementType));
        }

        function _replace(tagName) {
            return '<otus-' + tagName + ' item-data="$ctrl.itemData" on-update="$ctrl.update(valueType, value)" />';
        }

    }

})();