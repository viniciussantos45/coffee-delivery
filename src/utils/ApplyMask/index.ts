type MaskDefinition = {
  [key: string]: {
    isValid: (char: string) => boolean
  }
}

export const applyMask = (value: string, mask: string) => {
  let maskedValue = ''
  let valueIndex = 0

  const isDigit = (char: string) => /\d/.test(char)
  const isLetter = (char: string) => /[a-zA-Z]/.test(char)
  const isAlphanumeric = (char: string) => isDigit(char) || isLetter(char)

  const maskDefinitions: MaskDefinition = {
    '#': { isValid: isDigit },
    A: { isValid: isLetter },
    S: { isValid: isAlphanumeric },
  }

  for (
    let maskIndex = 0;
    maskIndex < mask.length && valueIndex < value.length;
    maskIndex++
  ) {
    const maskChar: keyof typeof maskDefinitions = mask[maskIndex]
    const valueChar = value[valueIndex]

    if (maskDefinitions[maskChar]) {
      if (maskDefinitions[maskChar].isValid(valueChar)) {
        maskedValue += valueChar
        valueIndex++
      } else {
        break
      }
    } else {
      maskedValue += maskChar
      if (maskChar === valueChar) {
        valueIndex++
      }
    }
  }

  return maskedValue
}
