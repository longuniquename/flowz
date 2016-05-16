#Flowz Control

The goal of this exercise is to pass the unit test.  

###Usage
```bash
npm install
npm test

#should produce
> flowz@1.0.0 test /Users/rstevens/Documents/projects/flowz
> TAP_DIAG=1 tap test/*.js

test/test.js .......................................... 3/3
total ................................................. 3/3

  3 passing (597.849ms)

```

###Instructions
Implement `index.js`, run `npm test` and pass unit tests, this must be done in 60 min.  The function needs to export an API that has the function `start`.  `start` will kick off the async chain of functions which are passed into `flow` as arguments, `end` is a callback when the chain is done.  The `flow` function needs to accept a variable number of functions. Each funtion will be passed in a parameter that is the result of `this.done(err, result)` from the previous funtion, exepct for the first function which receives it's value from `start`. 