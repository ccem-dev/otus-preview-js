(function() {
  'use strict';

  angular
    .module('otusjs.player.component')
    .component('otusPhoneQuestion', {
      templateUrl: 'app/otusjs-player-component/survey-item/question/phone/phone-question-template.html',
      controller: Controller,
      bindings: {
        itemData: '<',
        onUpdate: '&'
      }
    });

  Controller.$inject = [
    'otusjs.player.data.activity.CurrentItemService'
  ];

  function Controller(CurrentItemService) {
    var self = this;

    self.$onInit = function() {
      self.answer = CurrentItemService.getFilling().answer.value;
    };

    self.update = function() {
      self.onUpdate({
        valueType: 'answer',
        value: self.answer
      });
    };
  }
}());
