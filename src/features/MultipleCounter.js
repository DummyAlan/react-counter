import React from 'react'
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'

export default function MultipleCounter() {
  return (
    <div>
        <CounterSizeGenerator/>
        <CounterGroup size={3}/>
    </div>
  )
}
