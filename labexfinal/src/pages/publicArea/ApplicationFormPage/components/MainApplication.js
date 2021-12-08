import Input from "../../../../components/Input";
import { InputInd } from "../style";

const MainApplication = () => {
  return (
    <main>
      <InputInd>
        <fieldset>
          <legend> Candidatar </legend>

          <Input 
            name={'name'} 
            label={'Nome'} 
            placeholder={'Nome'}
          />
          
          <Input 
            name={'age'} 
            label={'Idade'} 
            placeholder={'Idade'} 
            type={'number'}
          />

          <Input 
            name={'profession'} 
            label={'Profissão'} 
            placeholder={'Ex: Advogado'} 
          />

          <Input 
            name={'applicationText'} 
            label={'Texto de candidatura'} 
            placeholder={'Texto'} 
          />

          <label> País </label>
          <select>
            <option> Brasil </option>
            <option> EUA </option>
          </select>

          <button type={'submit'}>Candiadtar</button>

        </fieldset>
      </InputInd>
    </main>
  )
}

export default MainApplication;
