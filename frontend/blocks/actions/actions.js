import './actions.scss';
import template from './actions.jade';

import Base from '../base/base';
import Factory from '../../factory';

import $ from 'jquery';

export default class Actions extends Base {
    constructor(parent, config) {
        super(parent, config);

        this._initItems();
    }

    _initItems() {
        let actions = this;

        this._items = this._config.items.map(block_config => {
            let block_ctor = Factory.get(block_config['block']);

            return new block_ctor(actions, block_config);
        });
    }

    get templateFn() {
        return template;
    }

    render() {
        this.el = $(this.templateFn());

        let actions = this;

        this._items.forEach(block => {
            block.render();
            actions._append(block);
        });
    }

    _append(block) {
        this.el.append(block.el);
    }
}

Factory.register('actions', Actions);