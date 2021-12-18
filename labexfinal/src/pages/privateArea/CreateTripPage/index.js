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
        <form onSubmit={submit}>
          <InputsContainer>
            <legend>Criar viagem</legend>
            <Input 
              placeholder={'Ex: Astrodev'}
              name={'name'} 
              label={'Nome'}
              onChange={onChange}
              value={form.name}
            />
            <Input 
              placeholder={'Ex: Astrodev'}
              name={'planet'}
              label={'Planeta'}
              onChange={onChange}
              value={form.planet}
            />
            <Input 
              placeholder={'Ex: Astrodev'}
              name={'date'}
              label={'Data'}
              onChange={onChange}
              value={form.date}
            />
            <Input 
              placeholder={'Ex: Astrodev'}
              name={'description'}
              label={'Descrição'}
              onChange={onChange}
              value={form.description}
            />
            <Input 
              placeholder={'Ex: Astrodev'}
              name={'durationInDays'}
              label={'Duração em dias'}
              onChange={onChange}
              value={form.durationInDays}
            />
            <button type={'submit'}>Criar</button>
          </InputsContainer>
        </form>
      </main>
    </>
  )
}

export default CreateTripPage;
