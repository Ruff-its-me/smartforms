import $ from 'jquery';

$.mask.definitions['9'] = '[0-9]';
$.mask.definitions['a'] = '[A-Za-z]';
$.mask.definitions['я'] = '[А-Яа-яёЁ]';
$.mask.definitions['*'] = '[A-Za-zА-Яа-яёЁ0-9]';
$.mask.definitions['f'] = '[A-Za-z0-9]';
$.mask.definitions['g'] = '[А-Яа-яёЁ0-9]';
$.mask.definitions['h'] = '[A-Za-z0-9-_]';
$.mask.definitions['d'] = '[0-9/-]';
$.mask.definitions['e'] = '[A-Za-zА-Яа-яёЁ0-9/]';
$.mask.definitions['m'] = '[0-9а-яёА-ЯЁ.s,-;/()]';
$.mask.definitions['i'] = '[- ]';
$.mask.definitions['k'] = '[0-9-]';
$.mask.definitions['l'] = '[0-9/]';
$.mask.definitions['r'] = '[0-9а-яА-Яa-zA-ZёЁ.,-/]';
$.mask.definitions['o'] = '[0-9а-яА-Яa-zA-ZёЁ/-]';
$.mask.definitions['s'] = '[0-9.,]';
$.mask.definitions['t'] = '[0-9A-Za-zа-яА-ЯёЁ-]';
$.mask.definitions['q'] = '[0-9,-]';
$.mask.definitions['v'] = '[A-Za-z0-9.,-_]';
$.mask.definitions['j'] = '[A-Za-zа-яА-ЯёЁ]';
$.mask.definitions['b'] = '[0-9а-яА-Яa-zA-ZёЁ.,-/\\]';
$.mask.definitions['p'] = '[0-9+()-]';
