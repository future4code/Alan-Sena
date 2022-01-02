/* eslint-disable no-unused-vars */
import { useParams } from 'react-router';
import { useState } from 'react';

import { useForm } from '../../../../hooks/useForm';
import Input from "../../../../components/Input";
import { InputInd, MainAppli } from "../style";
import { ApplyToTrip } from '../../../../services';
import Result from '../../../../components/ErrorOrSucess';

const MainApplication = () => {
  const param = useParams()

  const [ reque, setReque ] = useState('initial')

  const [ form, onChange ] = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    const response = await ApplyToTrip(form, param.id, setReque)
  }

  const validate = () => {
    if (reque === 'initial') {

    } else if (reque === 'error') {
      return <Result result={'erro'} set={setReque}/>
    } else if (reque === 'sucess') {
      return <Result result={'sucess'} set={setReque}/>
    }
  }
  
  return (
    <MainAppli>
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
            <option value={''}> Selecione seu país </option>
            <option value={'Brasil'}> Brasil </option>
            <option value={'EUA'}> EUA </option>
            <option value={'Argentina'}> Argentina </option>
            <option value={'Angola'}> Angola </option>
            <option value={'China'}> China </option>
            <option value={'França'}> França </option>
            <option value={'Costa Rica'}> Costa Rica </option>
            <option value={'Japão'}> Japão </option>
          </select>

          <button type={'submit'}>Candidatar</button>

        </fieldset>
      </InputInd>

      {validate()}
    </MainAppli>
  )
}

export default MainApplication;
