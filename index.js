
  function introduction(name = Josh) {
  return String(`Hi, my name is ${name}.`)
  }
  function introductionWithLanguage(name, language) {
    return String(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
    function introductionWithLanguageOptional(name, language = "JavaScript") {
    return String(`Hi, my name is ${name} and I am learning to program in ${language}.`);
} 