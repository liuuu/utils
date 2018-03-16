var invariant = function(condition, format, a, b, c, d, e, f) {
  if (__DEV__) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

// use
invariant(
  typeof WrappedComponent == 'function',
  `You must pass a component to the function returned by ` +
    `${methodName}. Instead received ${JSON.stringify(WrappedComponent)}`
);
