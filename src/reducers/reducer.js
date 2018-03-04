import React from 'react'

const initialState = [{
    name: "テスト",
    id:1,
  }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RENDER_NAME': {
      console.log(state);
      console.log(state.length);
      return [
          ...state,
          {
            name: action.text,
            id: action.id,
          }
      ]
    }
    default :
    return state
  }
}




export default reducer


