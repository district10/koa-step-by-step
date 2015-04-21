// node --harmony generator/5_generator_logic.js
// output:
//
// start run...
// tick 1 after 1000 ms
// tick 1 done
// tick 2 after 1000 ms
// tick 2 done
// tick 3 after 1000 ms
// tick 3 done

var count = 1;
function tick(done) {
  setTimeout(function () {
    console.log('tick %s after %s ms', count++, 1000);
    done();
  }, 1000)
}

function* GeneratorFactory() {
  console.log('start run...');
  yield tick;
  console.log('tick 1 done');
  yield tick;
  console.log('tick 2 done');
  yield tick;
  console.log('tick 3 done');
}

function run(generator) {
  var ret = generator.next();
  if (ret.done) return;
  ret.value(function () {
    run(generator);
  });
}

run(GeneratorFactory());

// generator
function run2(generator) {
  console.log('start');
  // 1
  var ret = generator.next();
  ret.value(console.log);
  // 2
  var ret = generator.next();
  ret.value(console.log);
  // 3
  var ret = generator.next();
  ret.value(console.log);
  console.log('end');
}

run2(GeneratorFactory());


/*
 * an example from : http://www.sitepoint.com/javascript-generators-preventing-callback-hell/
 * JS:
 *
    function* HelloGen2() {
      var a = yield 100;                // next()    : yield out 100
      var b = yield a + 100;            // next(500) : yield out 600 = 500+100
     
      console.log(b);                   // 600 not return to b, but next(1000) will pass 1000 to b.
    }
     
    var gen2 = HelloGen2();
     
    console.log(gen2.next());     // {value: 100, done: false}
    console.log(gen2.next(500));  // {value: 600, done: false}
    console.log(gen2.next(1000)); // {value: undefined, done: true}
 * 
 * Output:
    { value: 100, done: false }
    { value: 600, done: false }
    1000
    { value: undefined, done: true }
*/
