function rot13(str) { 
    function toAlphabet(array) {
        return array.map(function (val) {
            return String.fromCharCode(val);
        });
    }

    function toCharCode(array) {
        return array.map(function (val) {
            return val.charCodeAt();
        });
    }

    var stringToArray = str.toUpperCase().split("");
    var coded = toCharCode(stringToArray);
    var decipher = coded.map(function (val) {
        if (val >= 65 && val <= 77) {
            return val += 13;
        } else if (val >= 78 && val <= 90) {
            return val -= 13;
        } else {
            return val += 0;
        }
    });

    console.log(coded);
    console.log(decipher);
    console.log(toAlphabet(decipher).join(""));

    return toAlphabet(decipher).join("");
}


function showRot13() {
    var input = document.getElementById('input-cifrar');
    var result = document.querySelector(".resultado");
    result.textContent = rot13(input.value);
}
