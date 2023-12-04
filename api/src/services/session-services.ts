import { env } from '@/env/env'
import { AppError } from '@/routes/errors/appError'

interface ISession {
  password: string
}

class SessionService {
  async execute({ password }: ISession) {
    if (!password) {
      throw new AppError('Error not authorization')
    }

    const currentPassword = Intl.DateTimeFormat('pt-br')
      .format(new Date())
      .split('/')
      .join('')

    const validate = password === currentPassword

    if (!validate) {
      throw new AppError('Error not authorization', 401)
    }

    const response = {
      token: `${env.SECRET_JWT}${currentPassword}`,
    }

    return response
  }

  #validationToken(token: string) {
    const currentToken = this.#createToken()
    return token === currentToken
  }

  #createToken() {
    const currentPassword = Intl.DateTimeFormat('pt-br')
      .format(new Date())
      .split('/')
      .join('')

    return env.SECRET_JWT + currentPassword
  }
}

export { SessionService }
