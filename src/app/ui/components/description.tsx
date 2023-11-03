import { User } from 'next-auth'
import React from 'react'

type Props ={
    user: User,
    pagetype: string,
}

export default function description({ user, pagetype }: Props) {
  return (
    <div>Hello {user.name} your role is: {user.role}</div>
  )
}
