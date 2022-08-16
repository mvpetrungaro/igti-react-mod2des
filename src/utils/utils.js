const numberFormatter = Intl.NumberFormat('pt-BR')
const currencyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
const percentFormatter = Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
})

export function parseDate(month, year) {
  return (
    month.toString().padStart(2, '0') + '/' + year.toString().padStart(4, '0')
  )
}

export function parseNumber(value) {
  return numberFormatter.format(value)
}

export function parseCurrency(value) {
  return currencyFormatter.format(value)
}

export function parsePercent(value) {
  return percentFormatter.format(value)
}
