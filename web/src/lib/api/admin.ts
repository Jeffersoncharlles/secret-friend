import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import { api } from './axios'

export const pingAdmin = async () => {

  try {
    const token = getCookie('token', {
      cookies
    })
    const data = await api.post('/admin/session', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })

    console.log(data.statusText)
    if (data.status === 403) {
      return false
    }

    return true
  } catch (error) {


    return false
  }



}