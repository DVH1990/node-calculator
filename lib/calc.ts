// Calculator action array - add a key to support more actions
const actionArray = {
  mul: (left, right) => left * right,
  div: (left, right) => left / right
};

export default {
  performCalculation(action, left, right) {
    // Basic sanity check
    if (action === undefined || left === undefined || right === undefined) {
      console.error("Bad parameters");
      return {
        result: "Bad parameters"
      };
    }

    const fn = actionArray[action];

    // If user tries
    if (!(typeof fn === "function")) {
      console.error(`Unsupported action ${action}`);
      return {
        left,
        right,
        action,
        result: `Unsupported action ${action}`
      };
    }

    if (isNaN(left) || isNaN(right)) {
      console.error("Parameters must be numbers");
      return {
        left,
        right,
        action,
        result: "Parameters must be numbers"
      };
    }

    // Calculate result
    const result = fn(left, right);

    // Illegal computation
    if (typeof result === "number" && `${result}` === "Infinity") {
      console.error("Illegal operation (did you divide by 0?)");
      return {
        left,
        right,
        action,
        result: "Illegal operation (did you divide by 0?)"
      };
    }

    // Successful result
    return {
      left,
      right,
      action,
      result
    };
  }
};
