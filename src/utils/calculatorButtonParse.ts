const calculatorButtonParse = (label: string): string => {
  switch (label) {
    case '/':
    case 'x':
    case '-':
    case '+':
    case '=':
      return 'operation'
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      return 'value'
    case '.':
      return 'separator'
    default:
      return 'unknown'
  }
}

export default calculatorButtonParse
