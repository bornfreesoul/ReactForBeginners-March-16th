const initialState = {
  name: 'James',
  location: 'Vancouver, BC'
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        name: action.newName
      }

    default:
      return state
  }
}

export default users
