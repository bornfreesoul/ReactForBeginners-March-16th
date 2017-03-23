const initialState = {
  items: [],
  locations: []
}

const items = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {}

    default:
      return state
  }
}

export default items
