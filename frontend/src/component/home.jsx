import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

export default function home() {
  const [userdata, setUserdata] = useContext(UserContext)
  return (
    <>
      <p>
        welcome back home {userdata ? userdata.name : 'user'}
      </p>      </>
  )
}
