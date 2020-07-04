import axios from '../../config/requestConfig'
import {
  setUserLoading,
  setUser
} from './actions'

export const getUser = (payload) => {
  return dispatch => {
    dispatch(setUserLoading(true))
    axios.post('/user/getUser', payload)
      .then(res => {
        dispatch(setUser(res.data))
      })
      .catch((err) => {
        console.log(error)
      })
    dispatch(setUserLoading(false))
  }
}