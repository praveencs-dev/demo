exports.ressender = (res, statuscode, message) => {
    res.status(statuscode).json(message);
}
exports.validator = (expected, actual) => {
    for (let key in expected) {
        if (key in actual) {
            if (!expected[key].test(actual[key])) {
                return { message: `${key} is invalid` }
            }
        }
        else {
            return { message: `${key} is required` }

        }
    }
    return true
}