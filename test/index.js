var pickStructure = require('../pick-structure');
var assert = require('chai').assert;

describe('pickStructure', function () {
    it('flat object', function () {
        var actual;
        actual = pickStructure({a: 1, b: 2, c: 3}, {a: 1});
        assert.deepEqual(actual, {a: 1});
        actual = pickStructure({a: 1, b: 2, c: 3}, {b: 2});
        assert.deepEqual(actual, {b: 2});
        actual = pickStructure({a: 1, b: 2, c: 3}, {c: 3});
        assert.deepEqual(actual, {c: 3});
    });

    it('nested object', function () {
        var actual;
        actual = pickStructure({a: {b: {c: 1, c2: 2}}}, {a: {b: {c: 999}}});
        assert.deepEqual(actual, {a: {b: {c: 1}}});
        actual = pickStructure({a: {b: {c: 1, c2: 2}}}, {a: {b: {c2: 999}}});
        assert.deepEqual(actual, {a: {b: {c2: 2}}});
    });

    it('nested array', function () {
        var actual;
        actual = pickStructure({a: [{b: 1, b2: 2}]}, {a: [{b:99}]});
        assert.deepEqual(actual, {a: [{b: 1}]});
    });
});