/*
    Helper module for easily defining react class names, because often it's messy / verbose
    to construct long class strings from React props, etc.

    Any number of arguments, of types string, number, array, or object, are supported.
    Any value that evaluates to falsy, except 0, are not included as classes.
    Usage:
        prepareClasses("a", "b", "c")
            => "a b c"
        prepareClasses(undefined, false, "", null, true, "a")
            => "a"
        prepareClasses([0, 1, 2], "3", {4: true, 5: false})
            => "0 1 2 3 4"

    Matches logic from https://github.com/JedWatson/classnames
 */

function prepareClasses() {

    var arg, argType, key, classString = "";

    for (var i = 0, len = arguments.length; i < len; i++) {
        arg     = arguments[i];
        argType = typeof arg;

        if (!arg && arg !== 0) {
            continue;
        }
        else if (argType === "string" || argType  === "number") {
            classString += " " + arg;
        }
        else if (arg.constructor === Array) {
            classString += " " + prepareClasses.apply(this, arg); // recurse
        }
        else if (argType === "object") {
            for (key in arg) {
                if (arg.hasOwnProperty(key) && arg[key]) {
                    classString += " " + key;
                }
            }
        }
    }

    return classString.substr(1); // minus first space
};

module.exports = prepareClasses;
