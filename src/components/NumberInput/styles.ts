import React from 'react'
import styled from 'styled-components'

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizeComponent: 'small' | 'medium'
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  sizeComponent: 'small' | 'medium'
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sizeComponent: 'small' | 'medium'
}

export const StyledInput = styled.input<StyledInputProps>`
  width: ${({ sizeComponent }) =>
    sizeComponent === 'small' ? '25px' : '25px'};
  margin: 0;
  border: none;
  text-align: center;
  font-size: ${({ sizeComponent }) =>
    sizeComponent === 'small' ? '1rem' : '1.1rem'};
  background: none;
  color: #333;
  outline: none;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  padding: ${({ sizeComponent }) =>
    sizeComponent === 'small' ? '5px' : '10px'};
  border-radius: 5px;
`

export const IconButton = styled.button<IconButtonProps>`
  background: none;
  border: none;
  height: ${({ sizeComponent }) =>
    sizeComponent === 'small' ? '18px' : '18px'};
  color: ${({ theme }) => theme.colors.purple[1]};
  cursor: pointer;
`
