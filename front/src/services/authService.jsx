import { api, requestConfig } from "../utils/config";

const register = async (data) => {
  const config = requestConfig('POST', data)

  try {
    const res = await fetch( api + '/administrator/register', config)
    .then((res) => res.json())
    .catch((err) => err)

    if (res.login.id) {
      localStorage.setItem('user',JSON.stringify(res))
    }
    return res
  } catch (error) {
    console.log(error)
  }

}

const login = async (data) => {
  const config = requestConfig('POST', data)
  try {
    const res = await fetch( api + '/administrator/login',config)
    .then((res) => res.json())
    .catch((e) => e)
      if (res.login.id) {
        localStorage.setItem('user',JSON.stringify(res))
      }

    return res
  } catch (error) {
    console.log(error)
  }

}

export const authService = {
  register,
  login,
}
