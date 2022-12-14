import { api, requestConfig } from "../utils/config";

const showGang = async (token) => {
  const config = requestConfig('GET',null,token)

  try {
    const res = await fetch( api + '/gang/', config)
    .then((res) => res.json())
    .catch((err) => err)
    return res
  } catch (error) {
    console.log(error)
  }

}

export const gangService = {
  showGang,
}
