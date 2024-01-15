
import { getCookie } from 'cookies-next'
import { api } from './axios'


export const signUp = async (password: string) => {
  try {

    const { data } = await api.post('/admin/session', { password })

    if (data.token) {
      return data.token
    }

  } catch (error) {
    return error
  }

}



export const getEvents = async () => {
  try {

    const token = getCookie('token')

    const { data } = await api.get('admin/events', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    if (data.events) {
      return data.events
    }

  } catch (error) {
    return error
  }

}