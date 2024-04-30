import { ChangeEvent } from 'react'

export enum CategoryType {
  FAMILY = 'família',
  WORK = 'trabalho',
  COMMON = 'comum',
}

export type TypeQuery = 'category' | 'fav' | 'all'
export type ChangeType = ChangeEvent<HTMLInputElement>
