// Some code to test out lib
$(function () {
  var el = $('.smartform-with-select');

  smartforms.createForm(el, {
    cls: 'form',
    items: [{
      block: 'select',
      name: 'month',
      label: 'месяц',
      values: [{
        name: 'Январь',
        value: '01'
      }, {
        name: 'Февраль',
        value: '02'
      }, {
        name: 'Март',
        value: '03'
      }, {
        name: 'Апрель',
        value: '04'
      }, {
        name: 'Май',
        value: '05',
        selected: true
      }, {
        name: 'Июнь',
        value: '06'
      }, {
        name: 'Июль',
        value: '07'
      }, {
        name: 'Август',
        value: '08'
      }, {
        name: 'Сентябрь',
        value: '09'
      }, {
        name: 'Октябрь',
        value: '10'
      }, {
        name: 'Ноябрь',
        value: '11'
      }, {
        name: 'Декабрь',
        value: '12'
      }]
    }]
  });
});
