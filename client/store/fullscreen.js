const SET_FULLSCREEN = "SET_FULLSCREEN"

const setFullscreen = (fullscreen) => ({
    type: SET_FULLSCREEN,
    fullscreen
  })

  export const isFullscreenThunk = (boolean) => {
    return dispatch => {
    dispatch(setFullscreen(boolean))}
  }

  export default function(state = false, action) {
    switch (action.type) {
      case SET_FULLSCREEN:
        return action.fullscreen
     default:
        return state
    }
  }