var _ = require('lodash');

function pickStructure(obj, structureSource) {
    var result;
    if (_.isObject(obj)) {
        result = _.pick(obj, _.keys(structureSource));

        // nested
        _.each(structureSource, function (val, key) {
            if (_.isArray(val)) {
                _.each(val, function (_val, i) {
                    result[key][i] = pickStructure(result[key][i], _val);
                });
            } else if (_.isObject(val)) {
                result[key] = pickStructure(result[key], val);
            }
        });
    } else {
        result = obj;
    }
    return result;
}

module.exports = pickStructure;