export const translateTo = (inputJsonArray, language) => {
  const translatedArray = inputJsonArray.map(inputJson => {
    if (language && language in inputJson.language) {
      const translatedValues = inputJson.language[language]
      const translatedJson = { ...inputJson }

      for (const key in translatedValues) {
        if (translatedValues.hasOwnProperty(key) && translatedJson.hasOwnProperty(key)) {
          translatedJson[key] = translatedValues[key]
        }
      }

      delete translatedJson.language
      return translatedJson
    } else {
      delete inputJson.language
      return inputJson
    }
  })

  return translatedArray
}
