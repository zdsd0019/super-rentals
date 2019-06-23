import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';

let rental = EmberObject.create({
  image: 'fake.png',
  title: 'test-title',
  owner: 'test-owner',
  category: 'test-type',
  city: 'test-city',
  bedrooms: 3
});

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('should display rental details', function(assert) {
    this.set('rentalObj', rental);
});

test('should toggle wide class on click', function(assert) {
    this.set('rentalObj', rental);
});
});
