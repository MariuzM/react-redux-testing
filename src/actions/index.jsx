export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const isLogged = () => {
  return {
    type: 'SIGNED_IN',
  }
}
