const convertToFfromC = (celcius) => {
    let fahrenheit = celcius * (9/5) + 32;
    return fahrenheit;
};

const convertToCfromF = (fahrenheit) => {
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}

module.exports = {
    convertToFfromC,
    convertToCfromF
};