(function() {
  'use strict';

  angular
    .module('otusjs.player.core.step')
    .service('otusjs.player.core.step.LoadNextItemStepService', Service);

  Service.$inject = [
    'otusjs.player.data.navigation.NavigationService',
    'otusjs.player.data.activity.CurrentItemService',
    'otusjs.player.core.player.PlayerService',
  ];

  function Service(NavigationService, CurrentItemService, PlayerService) {
    var self = this;

    /* Public methods */
    self.beforeEffect = beforeEffect;
    self.effect = effect;
    self.afterEffect = afterEffect;
    self.getEffectResult = getEffectResult;

    function beforeEffect(pipe, flowData) {}

    function effect(pipe, flowData) {
      var loadData = NavigationService.loadNextItem();

      if (loadData && loadData !== 'END NODE') {
        CurrentItemService.setup(loadData);
        flowData.answerToEvaluate = {};
        flowData.answerToEvaluate.data = {};
        flowData.metadataToEvaluate = {};
        flowData.metadataToEvaluate.data = {};
      } else {
        PlayerService.end();
      }
    }

    function afterEffect(pipe, flowData) {}

    function getEffectResult(pipe, flowData) {
      return flowData;
    }
  }
})();
