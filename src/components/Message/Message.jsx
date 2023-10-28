import React from 'react'
import styles from './Message.module.css'

function Message({type,msg}) {
  return (
    <div className={styles[type]}>{msg}</div>
  )
}

export default Message