import React from 'react'
import { lower } from '../Utils'

const Highlight = ({ children, toHighlight }) => {
    function lower(string) {
        return string.toLowerCase();
      }
      
  const regex = new RegExp(`(${toHighlight})`, 'i')
  return children.split(regex).map((chunk, index) => {
    if (lower(chunk) === lower(toHighlight)) {
      return <mark key={index}>{chunk}</mark>
    }
    return chunk
  })
}

export default Highlight;