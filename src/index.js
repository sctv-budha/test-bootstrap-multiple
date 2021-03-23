import 'jquery';
import 'bootstrap';
import 'bootstrap-multiselect';
import './style.css';

(async () => {
  
  $(document.body)
    .on('click', '#btn-tap', ()=> console.log('tapped'));

  $('#multiple-optgroups').multiselect();
})();