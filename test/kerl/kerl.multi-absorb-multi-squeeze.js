var chai = require('chai');
var assert = chai.assert;
var Converter = require('../../lib/crypto/converter/converter');
var Kerl = require('../../lib/crypto/kerl/kerl');

describe('kerl.multi-absorb-multi-squeeze', function() {
  
  var tests = [{
    input: 'G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA',
    expected: 'LUCKQVACOGBFYSPPVSSOXJEKNSQQRQKPZC9NXFSMQNRQCGGUL9OHVVKBDSKEQEBKXRNUJSRXYVHJTXBPDWQGNSCDCBAIRHAQCOWZEBSNHIJIGPZQITIBJQ9LNTDIBTCQ9EUWKHFLGFUVGGUWJONK9GBCDUIMAYMMQX'
  }];
  
  tests.forEach(function(test){
  
    it('Should produce valid hash: ' + test.expected, function() {
      var trits = Converter.trits(test.input);
      var kerl = new Kerl();
      kerl.initialize();
      kerl.absorb(trits, 0, trits.length);
      var hashTrits = [];
      kerl.squeeze(hashTrits, 0, kerl.HASH_LENGTH * 2);
      var hash = Converter.trytes(hashTrits);
      assert.deepEqual(test.expected, hash);
    });

  });

});