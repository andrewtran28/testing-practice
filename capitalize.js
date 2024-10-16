function capitalize(string) {

    if (typeof string === 'string') {
        if (string.charAt(0).match(/[a-z]/i)) {
            let capitalString = string.charAt(0).toUpperCase() + string.slice(1);
            return capitalString;
        }
    } else {
        return false;
    }

    return capitalizeString;
}

module.exports = capitalize;