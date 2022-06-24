import React, { InputHTMLAttributes, useState } from "react";
import Button from "../Button";

interface FormProps {
    title: string
}

interface FormDataProps {
  name: string,
  email: string,
  password: string
}

export default function Form({title}: FormProps) {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    password: ''
  })




  return (
    <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault()
    
    }}>
        <h2>{title}</h2>
        <input type='text' placeholder="Name" value={formData.name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: event.target.value})}/>
        <input type='email' placeholder="Email" value={formData.email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: event.target.value})}/>
        <input type='password' placeholder="Password" value={formData.password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, password: event.target.value})}/>
        <Button type='submit'>Submit</Button>
    </form>
  )
}
