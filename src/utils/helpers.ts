export const replaceEncondedStrings = (text: string): string => {
  const symbols = [
    { encoded: '&quot;', value: '"' },
    { encoded: '&#039;', value: "'" },
    { encoded: '&amp;', value: '&' },
    { encoded: '&lt;', value: '<' },
    { encoded: '&gt;', value: '>' }
  ]

  let newText = text

  symbols.map((el) => {
    newText = newText.split(el.encoded).join(el.value)
  })

  return newText
}
