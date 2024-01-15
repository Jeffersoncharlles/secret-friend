
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import { api } from './axios'


export const pingAdmin = async () => {

  try {
    const token = getCookie('token', {
      cookies
    })
    const data = await api.get('/admin/events', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    if (data.status === 403) {
      return false
    }

    return true

  } catch (error) {
    return false
  }
}
