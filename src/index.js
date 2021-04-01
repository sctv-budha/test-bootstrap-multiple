import 'jquery';
import 'multiple-select';
import './style.css';

(async event => {
  const singleSelect = [
    {
      text: 'Apple',
      value: 1
    },
    {
      text: 'Banana',
      value: 2
    },
    {
      text: 'Orange',
      value: 3
    }
  ];

  const multiSelect = [
    {
      type: 'optgroup',
      label: 'Fruits',
      children: [
        {
          text: 'Apple',
          value: 1
        },
        {
          text: 'Banana',
          value: 2
        },
        {
          text: 'Orange',
          value: 3
        }
      ]
    }
  ];

  $('#multiple-optgroups').multipleSelect({
    data: multiSelect,
    styler: (row) => {
      alert('row ==', row);
      if ((row._key.match(/_/g) || []).length > 1) {
        return 'margin-left: 22px';
      }
    }
  });

  $('#single-select').multipleSelect({
    data: singleSelect
  })
})();