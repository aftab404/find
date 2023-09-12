import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'


export default function Search() {
  return (
    <div className={`flex gap-2 p-2`}>
        <Input placeholder='Search' />
        <Button variant={'secondary'}>🔍</Button>
    </div>
  )
}
