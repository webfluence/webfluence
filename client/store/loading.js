const SET_LOADING = "SET_LOADING"

const setLoading = (loading) => ({
    type: SET_LOADING,
    loading
  })

  export const isLoading = (boolean) => {
    return dispatch => {
    dispatch(setLoading(boolean))}
  }

  export default function(state = true, action) {
    switch (action.type) {
      case SET_LOADING:
        return action.loading
     default:
        return state
    }
  }