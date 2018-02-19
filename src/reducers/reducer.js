import React from 'react'

const initialState = {
  name: "テストテストテスト",
  chk: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RENDER_NAME': {
      return {
      	name:text
      }
    }
    case 'RENDER_CHK': {
      return {
      }
    }
  }
}

export default reducer
