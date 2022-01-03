/* eslint-disable no-unused-vars */
import HeaderAdm from '../../../components/HeaderAdm';
import Input from '../../../components/Input'
import { InputsContainer } from './style'

import { useForm } from '../../../hooks/useForm';
import useProtect from '../../../hooks/useProtect';
import { CreateTripRequest } from '../../../services';

const CreateTripPage = () => {
  useProtect()

  const [ form, onChange ] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    const response = await CreateTripRequest({ form })
  }

  return (
    <>
      <HeaderAdm redirect={'Home'}/>
      <main>
        <InputsContainer onSubmit={submit}>
          <fieldset>
            <legend>Criar viagem</legend>
            <Input 
              placeholder={'Ex: Volta a lua'}
              name={'name'} 
              label={'Nome'}
              onChange={onChange}
              value={form.name}
            />
            <Input 
              placeholder={'Ex: Plutão'}
              name={'planet'}
              label={'Planeta'}
              onChange={onChange}
              value={form.planet}
            />
            <Input 
              placeholder={'Ex: 21/12/2034'}
              name={'date'}
              label={'Data'}
              onChange={onChange}
              value={form.date}
            />
            <Input 
              name={'description'}
              label={'Descrição'}
              onChange={onChange}
              value={form.description}
            />
            <Input 
              placeholder={'Ex: 24'}
              name={'durationInDays'}
              label={'Duração em dias'}
              onChange={onChange}
              value={form.durationInDays}
            />
            <button type={'submit'}>Criar</button>
          </fieldset>
        </InputsContainer>
      </main>
    </>
  )
}

export default CreateTripPage;
