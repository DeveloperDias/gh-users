function languageVerify(
  language: string,
  htmlSpan: HTMLSpanElement,
  languageDiv: HTMLDivElement
) {
  if (language !== null) {
    switch (language.toUpperCase()) {
      case "C":
        htmlSpan.style.backgroundColor = `#555555`;
        break;
      case "C++":
        htmlSpan.style.backgroundColor = `#f34b7d`;
        break;
      case "C#":
        htmlSpan.style.backgroundColor = `#178600`;
        break;
      case "GO":
        htmlSpan.style.backgroundColor = `#00add8`;
        break;
      case "JAVA":
        htmlSpan.style.backgroundColor = `#b07219`;
        break;
      case "JAVASCRIPT":
        htmlSpan.style.backgroundColor = `#f1e05a`;
        break;
      case "PYTHON":
        htmlSpan.style.backgroundColor = `#3572A5`;
        break;
      case "RUBY":
        htmlSpan.style.backgroundColor = `#701516`;
        break;
      case "SWIFT":
        htmlSpan.style.backgroundColor = `#ffac45`;
        break;
      case "TYPESCRIPT":
        htmlSpan.style.backgroundColor = `#2B7489`;
        break;
      case "RUST":
        htmlSpan.style.backgroundColor = `#DEA584`;
        break;
      case "KOTLIN":
        htmlSpan.style.backgroundColor = `#F18E33`;
        break;
      case "PHP":
        htmlSpan.style.backgroundColor = `#4F5D95`;
        break;
      case "HTML":
        htmlSpan.style.backgroundColor = `#E34C26`;
        break;
      case "CSS":
        htmlSpan.style.backgroundColor = `#E34C26`;
        break;
      case "VIML":
        htmlSpan.style.backgroundColor = `#199f4b`;
        break;
      case "SHELL SCRIPT":
        htmlSpan.style.backgroundColor = `#89E051`;
        break;
      case "POWERSHELL":
        htmlSpan.style.backgroundColor = `#012456`;
        break;
      case "R":
        htmlSpan.style.backgroundColor = `#198CE7`;
        break;
      case "MATLAB":
        htmlSpan.style.backgroundColor = `#E16737`;
        break;
      case "OBJECTIVE-C":
        htmlSpan.style.backgroundColor = `#438EFF`;
        break;
      case "PERL":
        htmlSpan.style.backgroundColor = `#0298C3`;
        break;
      case "LUA":
        htmlSpan.style.backgroundColor = `#000080`;
        break;
      case "MARKDOWN":
        htmlSpan.style.backgroundColor = `#083fa1`;
        break;
      case "JUPYTER NOTEBOOK":
        htmlSpan.style.backgroundColor = `#da5b0b`;
        break;
      case "ZIL":
        htmlSpan.style.backgroundColor = `#dc75e5`;
        break;
      case "VUE":
        htmlSpan.style.backgroundColor = `#41b883`;
        break;
      case "SHELL":
        htmlSpan.style.backgroundColor = `#89E051`;
        break;
      case "Objective-C++":
        htmlSpan.style.backgroundColor = `#6866fb`;
        break;
    }
  } else {
    languageDiv.remove();
  }
}

export default languageVerify;
