import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center'>
          <p className='document-title'>Title</p>
        </div>
      </Header>
      <Editor/>
    </div>
  )
}

export default Document
