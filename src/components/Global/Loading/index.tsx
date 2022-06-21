import React from 'react'
import { StyledLoading } from './styles'

interface LoadingProps {
    children: React.ReactNode,
    animation: boolean
}

export default function LoadingComponent({children, animation }: LoadingProps) {
  return (
   <StyledLoading animation={animation}>{children}</StyledLoading>
  )
}
