const zeroHelper = (func) => {
    return func.toString().length == 1 ? '0' : '';
}

module.exports = zeroHelper;