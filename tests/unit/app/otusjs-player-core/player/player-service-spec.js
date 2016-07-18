describe('PlayerService', function() {

    var Mock = {};
    var service;
    var items = [1, 2, 3];

    beforeEach(function() {
        module('otusjs.player.core');

        inject(function(_$injector_) {
            service = _$injector_.get('otusjs.player.core.PlayerService', {
                ItemManagerService: mockItemManagerService(_$injector_)
            });
        });
    });

    describe('play method', function() {

        beforeEach(function() {
            service.play(items);
        });

        it('should call ItemManagerService.init with item list', function() {
            expect(Mock.ItemManagerService.init).toHaveBeenCalledWith(items);
        });

    });

    describe('getNext method', function() {

        beforeEach(function() {
            service.play(items);
        });

        it('should call ItemManagerService.hasNext method', function() {
            spyOn(Mock.ItemManagerService, 'hasNext');

            service.getNext();

            expect(Mock.ItemManagerService.hasNext).toHaveBeenCalled();
        });

        it('should call ItemManagerService.getCurrentItem method', function() {
            spyOn(Mock.ItemManagerService, 'getCurrentItem');

            service.getNext();

            expect(Mock.ItemManagerService.getCurrentItem).toHaveBeenCalled();
        });

        it('should return an item when it exists', function() {
            spyOn(Mock.ItemManagerService, 'hasNext').and.returnValue(true);

            expect(service.getNext()).toBeDefined();
        });

        it('should return an item when it not exists', function() {
            spyOn(Mock.ItemManagerService, 'hasNext').and.returnValue(false);

            expect(service.getNext()).toBeUndefined();
        });

    });

    describe('getPrevious method', function() {

        beforeEach(function() {
            service.play(items);
        });

        it('should call ItemManagerService.hasPrevious method', function() {
            spyOn(Mock.ItemManagerService, 'hasPrevious');

            service.getPrevious();

            expect(Mock.ItemManagerService.hasPrevious).toHaveBeenCalled();
        });

        it('should call ItemManagerService.getCurrentItem method', function() {
            spyOn(Mock.ItemManagerService, 'hasPrevious').and.returnValue(true);
            spyOn(Mock.ItemManagerService, 'getCurrentItem');

            service.getPrevious();

            expect(Mock.ItemManagerService.getCurrentItem).toHaveBeenCalled();
        });

        it('should return an item when it exists', function() {
            spyOn(Mock.ItemManagerService, 'hasPrevious').and.returnValue(true);

            expect(service.getPrevious()).toBeDefined();
        });

        it('should return an item when it not exists', function() {
            spyOn(Mock.ItemManagerService, 'hasPrevious').and.returnValue(false);

            expect(service.getPrevious()).toBeUndefined();
        });

    });

    describe('hasNext method', function() {

        beforeEach(function() {
            service.play(items);
        });

        it('should call ItemManagerService.hasNext', function() {
            spyOn(Mock.ItemManagerService, 'hasNext');

            service.hasNext();

            expect(Mock.ItemManagerService.hasNext).toHaveBeenCalled();
        });

    });

    describe('hasPrevious method', function() {

        beforeEach(function() {
            service.play(items);
        });

        it('should call ItemManagerService.hasPrevious', function() {
            spyOn(Mock.ItemManagerService, 'hasPrevious');

            service.hasPrevious();

            expect(Mock.ItemManagerService.hasPrevious).toHaveBeenCalled();
        });

    });

    function mockItemManagerService($injector) {
        Mock.ItemManagerService = $injector.get('otusjs.player.core.ItemManagerService');

        spyOn(Mock.ItemManagerService, 'init').and.callThrough();

        return Mock.ItemManagerService;
    }

});