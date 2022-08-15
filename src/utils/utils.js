const percentFormatter = Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
})
const currencyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function parseDate(month, year) {
  return (
    month.toString().padStart(2, '0') + '/' + year.toString().padStart(4, '0')
  )
}

function parseCurrency(value) {
  return currencyFormatter.format(value)
}

function parsePercent(before, after) {
  let yieldValue = 0

  if (before) {
    yieldValue = (after - before) / before
  }

  return percentFormatter.format(yieldValue)
}

export { parseDate, parseCurrency, parsePercent }
