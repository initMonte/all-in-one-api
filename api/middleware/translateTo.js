export const translateTo = (inputJsonArray, language) => {
  let translatableLanguage = false
  if (language && language in inputJsonArray[0].language) { translatableLanguage = true }

  const translatedArray = inputJsonArray.map(inputJson => {
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
