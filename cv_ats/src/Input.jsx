import React, { forwardRef } from 'react'

const Input = forwardRef(({lable},ref) =>{
  return (
    <>
       <label htmlFor="">{lable}</label>
       <input type="text" ref={ref}/>
    </>
  )
}
)

export default Input;