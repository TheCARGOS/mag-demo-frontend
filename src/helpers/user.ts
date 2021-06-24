import React from 'react'

export interface UserInfo {
  fullName: string,
  cardNumber: string,
  expiresAt: string,
  cvc: string
}

export const getDefaultUserInfo = (): UserInfo => {
  return {
    fullName: '',
    cardNumber: '',
    expiresAt: '',
    cvc: ''
  }
}