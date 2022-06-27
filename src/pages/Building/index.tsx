import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { StyledMain } from './styles'

export default function Building() {
  const history = useHistory()
  
  useEffect(() => {
		document.title = `Site do Valentin | Em construção `

    setTimeout(() => {
      history.push('/')
    }, 3500)
  }, [])

  return (
    <StyledMain>
        <img src='https://thumbs.gfycat.com/SlipperyCheerfulDwarfmongoose-max-1mb.gif' alt=''/>
        <h1>Em construção, redirecionando para Home.</h1>
    </StyledMain>
  )
}
