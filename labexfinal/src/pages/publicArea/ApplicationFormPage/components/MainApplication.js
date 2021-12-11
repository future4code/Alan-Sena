/* eslint-disable no-unused-vars */
import { useForm } from '../../../../hooks/useForm';

import Input from "../../../../components/Input";
import { InputInd } from "../style";
import { useParams } from 'react-router';
import { ApplyToTrip } from '../../../../services';

const MainApplication = () => {
  const param = useParams()

  const [ form, onChange ] = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    const response = await ApplyToTrip(form, param.id)
  }

  return (
    <main>
      <InputInd onSubmit={submit}>
        <fieldset>
          <legend> Candidatar </legend>

          <Input 
            onChange={onChange}
            value={form.name}
            name={'name'} 
            label={'Nome'} 
            placeholder={'Nome'}
          />
          
          <Input 
            onChange={onChange}
            value={form.age}
            name={'age'} 
            label={'Idade'} 
            placeholder={'Idade'} 
            type={'number'}
          />

          <Input 
            onChange={onChange}
            value={form.profession}
            name={'profession'} 
            label={'Profissão'} 
            placeholder={'Ex: Advogado'} 
          />

          <Input 
            onChange={onChange}
            value={form.applicationText}
            name={'applicationText'} 
            label={'Texto de candidatura'} 
            placeholder={'Texto'} 
          />

          <label> País </label>
          <select name={'country'} onChange={onChange}>
            <option value={'Brasil'}> Brasil </option>
            <option value={'EUA'}> EUA </option>
          </select>

          <button type={'submit'}>Candiadtar</button>

        </fieldset>
      </InputInd>
    </main>
  )
}

export default MainApplication;
