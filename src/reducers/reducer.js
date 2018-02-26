import React from 'react'

const initialState = {
  name: "テスト",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RENDER_NAME': {
      return { 
      	name:action.text
      }
    }
    default :
    return state
  }
}



export default reducer


