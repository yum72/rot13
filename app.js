const rot13 = str => {

    const inputStringArr = str.split('')

    return inputStringArr.map(char => {

        const charCode = char.charCodeAt(0)

        if (charCode < 65 || charCode > 90) {
            return String.fromCharCode(charCode)
        }
        else if (charCode < 78) {
            return String.fromCharCode(charCode + 13)
        }
        else {
            return String.fromCharCode(charCode - 13)
        }

    }).join('')

}


console.log(rot13("SERR PBQR PNZC"))