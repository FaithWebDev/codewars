function abbrevName(name) {
    let nameArray = name.split('')
    let firstInitial = nameArray[0]
    let position = nameArray.indexOf(' ')
    let lastInitial = name.charAt(position + 1)
    let abbreviatedName = `${firstInitial}.${lastInitial}`
    return abbreviatedName
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

