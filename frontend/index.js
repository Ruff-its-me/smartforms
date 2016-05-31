import './blocks/actions/actions';
import './blocks/button/button';
import './blocks/checkbox/checkbox';
import './blocks/date/date';
import './blocks/fieldset/fieldset';
import './blocks/fieldset/fieldset_row';
import './blocks/input/input';
import './blocks/select/select';
import './blocks/static/static';
import './blocks/text/text';
import './blocks/label/label';
import './blocks/array/array_field';

import Modal from './blocks/modal/modal';
import Form from './blocks/form/form';

function createForm(el, config) {
  const form = new Form(config);

  form.render();

  el.replaceWith(form.el);

  form.afterRender();

  return form;
}

function createModal(el, config) {
  const modal = new Modal(config);

  modal.render();

  el.replaceWith(modal.el);

  modal.afterRender();

  return modal;
}

module.exports = {
  createForm,
  createModal
};
