import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers(): Promise<
  { id: number; name: string; userName: string; location: string }[]
> {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body.users
  })
}
