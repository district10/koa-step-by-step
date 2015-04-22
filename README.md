learn koa step by step
----------

___Please run `npm install` to install all the dependencies first. Also you need node v0.11.13+ to run all the examples.___

## generator

Several simple examples to explain `Iterator` / `Generator` / `AsyncFunction`.

1. [ o | iterator](generator/1_iterator.js)
2. [ o | generator](generator/2_generator.js)
3. [ o | iterator with functions](generator/3_iterator_fn.js)
4. [ o | generator with functions](generator/4_generator_fn.js)
5. [ o | generator with logic](generator/5_generator_logic.js)
6. [ ? | generator with complex logic, a minimal implement of co](generator/6_generator_complex.js)
7. [ ? | co with thunk](generator/7_co_thunk.js)
8. [ ? | co with promise](generator/8_co_promise.js)
9. [ ? | async function with promise](generator/9_async_function.js)

## apps

Several simple examples to show how `koa` works.

1. [ o | helloworld](apps/1_helloworld.js)
2. [ o | with router](apps/2_router.js)

    ➜  koa-step-by-step git:(master) ✗ curl http://localhost:3000/login 
    login page%                                                                                                                                                                             ➜  koa-step-by-step git:(master) ✗ curl -X POST -d "null" http://localhost:3000/login
    Not Found%                                                                                                                                                                              ➜  koa-step-by-step git:(master) ✗ curl -X POST -d "{data: null}" http://localhost:3000/login
    Not Found%                                                                                                                                                                              ➜  koa-step-by-step git:(master) ✗ curl -X POST -d "{data: null}" http://localhost:3000/logout
    Redirecting to <a href="/">/</a>.%  

3. [ o | with template render](apps/3_view.js)
4. [ ? | with middlewares](apps/4_middlewares.js)
5. [ ? | a completed koa app](apps/5_authentication.js)

## License

MIT
