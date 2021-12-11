import { useNavigate } from "react-router";
import { useForm } from "../../../../hooks/useForm";
import { login } from "../../../../services";

import Input from '../../../../components/Input'

const MainLogin = () => {
  const navigate = useNavigate()

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
      <form onSubmit={submit}>
        <fieldset>
          <legend> Dados do usuário </legend>

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
      </form>
    </main>
  )
}
 export default MainLogin;
 