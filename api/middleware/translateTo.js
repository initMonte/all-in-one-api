export const translateTo = (input, language) => {
  let translatableLanguage = false

  if (input instanceof Array) {
    if (input[0] && language && language in input[0].language) { translatableLanguage = true }

    const translatedArray = input.map(inputJson => {
      const translatedJson = { ...inputJson }

      if (translatableLanguage === true) {
        const translatedValues = inputJson.language[language]

        for (const key in translatedValues) {
          if (translatedValues.hasOwnProperty(key) && translatedJson.hasOwnProperty(key)) {
            translatedJson[key] = translatedValues[key]
          }
        }
      }
      delete translatedJson.language
      return translatedJson
    })

    return translatedArray
  }
  if (language && language in input.language) { translatableLanguage = true }

  const translatedJson = { ...input }

  if (translatableLanguage === true) {
    const translatedValues = input.language[language]

    for (const key in translatedValues) {
      if (translatedValues.hasOwnProperty(key) && translatedJson.hasOwnProperty(key)) {
        translatedJson[key] = translatedValues[key]
      }
    }
  }
  delete translatedJson.language
  return translatedJson
}
