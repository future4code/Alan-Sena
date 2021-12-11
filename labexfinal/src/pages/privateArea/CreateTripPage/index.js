import Input from '../../../components/Input'

const CreateTripPage = () => {
  return (
    <form>
      <fieldset>
        <legend>Criar viagem</legend>
        <Input 
          name={'name'} 
          label={'Nome'}
        />
        <Input 
          name={'planet'}
          label={'Planeta'}
        />
        <Input 
          name={'date'}
          label={'Data'}
        />
        <Input 
          name={'description'}
          label={'Descrição'}
        />
        <Input 
          name={'durationInDays'}
          label={'Duração em dias'}
        />
        <button type={'submit'}>CRiar</button>
      </fieldset>
    </form>
  )
}

export default CreateTripPage;
