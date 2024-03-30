export interface User {
  id: number
  name: string
  userName: string
  email: string
  password: string
  location: string
  createdAt: string
  updatedAt: string
}

export interface NewUser {
  name: string
  userName: string
  email: string
  password: string
  location: string
  createdAt: string
  updatedAt: string
}
