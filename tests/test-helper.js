import resolver from './helpers/resolver';
import DS from 'ember-data';
import { setResolver } from 'ember-qunit';
import { start } from 'ember-cli-qunit';

DS.ActiveModelAdapter = null;
DS.ActiveModelSerializer = null;

setResolver(resolver);

start();
