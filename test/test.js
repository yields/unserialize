
var unserialize = require('unserialize');

function assert(expr, ms){
  if (expr) return;
  throw new Error(ms || 'major fail');
}

describe('unserialize(val)', function(){
  it('should unserialize given `str` without any errors', function(){
    var str = JSON.stringify('boo');
    assert('boo' == unserialize(str));
  })
})
