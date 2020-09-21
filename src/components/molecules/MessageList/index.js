import React, { useContext, useEffect } from 'react'
import { Text } from './MessageList.styles'
import PersonalContext from '../../personalContext'

export default function MessageList(props) {
  useEffect(() => {
    props.more()
  }, [])

  const personalInfo = useContext(PersonalContext)
  // console.log(personalInfo)

  const getMessages = () => {
    return props.messages.map((m, index) => {
      return <Text key={`message-${index}`}>{m.content}</Text>
    })
  }

  return (
    <div>
      {getMessages()}
    </div>
  )
}
