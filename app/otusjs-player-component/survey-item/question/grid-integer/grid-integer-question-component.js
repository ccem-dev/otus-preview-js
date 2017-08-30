(function () {
  'use strict';

  angular
    .module('otusjs.player.component')
    .component('otusGridIntegerQuestion', {
      templateUrl: 'app/otusjs-player-component/survey-item/question/grid-integer/grid-integer-question-template.html',
      controller: Controller,
      bindings: {
        itemData: '<',
        onUpdate: '&'
      },
      require: {
        otusQuestion: '^otusQuestion'
      }
    });

  Controller.$inject = [
    'otusjs.player.data.activity.CurrentItemService'
  ];

  function Controller(CurrentItemService) {
    var self = this;

    /* Public Interface */
    self.$onInit = onInit;
    self.update = update;
    self.clear = clear;

    function onInit() {
      self.answerArray = CurrentItemService.getFilling().answer.value;
      self.otusQuestion.answer = self;
      _fixArray();
    }

    function update(outerIndex, innerIndex) {
      if (!_checkIfAnswered()) {
        self.onUpdate({
          valueType: 'answer',
          value: {}
        });
      } else {
        assignNullsToEmptyValues();
        self.onUpdate({
          valueType: 'answer',
          value: self.answerArray
        });
      }
    }

    function _fixArray() {
      if (!self.answerArray) {
        self.answerArray = [[]];

        self.itemData.getLinesList().forEach(function (line, outerIndex) {
          self.answerArray[outerIndex] = [];
          line.getGridIntegerList().forEach(function (gridNumber, innerIndex) {
            self.answerArray[outerIndex][innerIndex] = _buildAnswerObject(gridNumber);
            console.log(self.answerArray[outerIndex][innerIndex]);
          });
        });
      }
    }

    function _buildAnswerObject(gridNumber) {
      return {
        objectType: 'GridIntegerAnswer',
        gridNumber: gridNumber.customID,
        value: (gridNumber.value === undefined) ? null : Number(gridNumber.value)
      };
    }

    function _checkIfAnswered() {
      var result = false;
      self.itemData.getLinesList().forEach(function (line, outerIndex) {
        line.getGridIntegerList().forEach(function (gridNumber, innerIndex) {
          if (self.answerArray[outerIndex][innerIndex].value !== null) {
            result = true;
          }
        });
      });
      return result;
    }

    function assignNullsToEmptyValues() {
      self.itemData.getLinesList().forEach(function (line, outerIndex) {
        line.getGridIntegerList().forEach(function (gridNumber, innerIndex) {
          if (!self.answerArray[outerIndex][innerIndex].value || self.answerArray[outerIndex][innerIndex].value === '') {
            self.answerArray[outerIndex][innerIndex].value = null;
          }
        });
      });
    }

    function clear() {
      CurrentItemService.getFilling().answer.clear();
      delete self.answerArray;
      _fixArray();
    }
  }
}());
