const form = document.getElementsByTagName('form')[0]

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const formData = new FormData(form)

  const wins = formData.get('wins')
  const losses = formData.get('losses')

  const balance = subtract(wins, losses)

  const lvl = qualify(balance)

  alert(`O Herói tem de saldo de ${balance} está no nível de ${lvl}`)
})

function qualify(balance) {
  if (balance < 10) {
    return 'Ferro'
  } else if (balance >= 10 && balance <= 20) {
    return 'Bronze'
  } else if (balance >= 21 && balance <= 50) {
    return 'Prata'
  } else if (balance >= 51 && balance <= 80) {
    return 'Ouro'
  } else if (balance >= 81 && balance <= 90) {
    return 'Diamante'
  } else if (balance >= 91 && balance <= 100) {
    return 'Lendário'
  } else {
    return 'Imortal'
  }
}

function subtract(a, b) {
  return a - b
}
