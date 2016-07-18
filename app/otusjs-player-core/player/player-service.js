(function() {
    'use strict';

    angular
        .module('otusjs.player.core')
        .service('otusjs.player.core.PlayerService', PlayerService);

    PlayerService.$inject = [
        'otusjs.player.core.ItemManagerService'
    ];

    function PlayerService(ItemManagerService) {
        var self = this;

        self.play = play;
        self.getNext = getNext;
        self.getPrevious = getPrevious;
        self.hasNext = hasNext;
        self.hasPrevious = hasPrevious;

        function play(items) {
            ItemManagerService.init(items);
        }

        function getNext() {
            if (ItemManagerService.hasNext()) {
                return ItemManagerService.getCurrentItem();
            }
        }

        function getPrevious() {
            if (ItemManagerService.hasPrevious()) {
                return ItemManagerService.getCurrentItem();
            }
        }

        function hasNext() {
            return ItemManagerService.hasNext();
        }

        function hasPrevious() {
            return ItemManagerService.hasPrevious();
        }
    }

})();