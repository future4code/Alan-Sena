/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router";
import { useForm } from "../../../../hooks/useForm";
import { login } from "../../../../services";

import Input from '../../../../components/Input'
import { useEffect } from "react";
import { LoginStyle } from "../style";

const MainLogin = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) navigate('/adm/home')
  }, [])

  const [ form, onChange ] = useForm({
    email: '',
    password: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    const response = await login({ email: form.email, password: form.password })
    if (response.token) {
      localStorage.setItem('token', response.token)
      navigate('/adm/home')
    }
  }

  return (
    <main>
      <LoginStyle onSubmit={submit}>
        <fieldset>
          <legend> Insira seus dados de login </legend>

          <Input 
            label={'E-mail'} 
            placeholder={'Ex: alanbrazoes@gmail.com'} 
            onChange={onChange} 
            name={'email'} 
            value={form.email}
          />

          <Input 
            label={'Senha'}
            placeholder={'Senha'} 
            type={'password'}
            onChange={onChange}
            name={'password'}
            value={form.password}
          />
          
          <button type={'submit'}> Entrar </button>

        </fieldset>
      </LoginStyle>
    </main>
  )
}
 export default MainLogin;
 