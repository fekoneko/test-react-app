import { BsPlusLg } from 'react-icons/bs';
import { BsDashLg } from 'react-icons/bs';

const FormFieldArray = ({ fieldId, fieldLabel, fieldPlaceholderPrefix, array, setArray }) => {

  const handleTextChange = (e, inputKey) => {
    let newArray = array;
    newArray[inputKey] = e.target.value;
    setArray(newArray);
  }

  const getInputs = () => {
    return (
      <ul>
        {
          array.map((item, i) => {
            return  (
              <li key={ i }>
                <input
                  autoFocus
                  id={ fieldId + '-' + i }
                  type='text'
                  placeholder={ fieldPlaceholderPrefix + (i+1) }
                  onChange={ (e) => handleTextChange(e, i) }
                  required
                />
              </li>
            );
          })
        }
      </ul>
    );
  }

  return (
    <fieldset>
      <label htmlFor={ fieldId }>{ fieldLabel }</label>
      <div className='form-array-inputs'>
        <fieldset id={ fieldId }>
          { getInputs() }
        </fieldset>
        <button
          className='control-button'
          type='button'
          onClick={ () => {
            setArray([...array, ''])
          } }
        >
          <BsPlusLg />
        </button>
        <button
          className='control-button'
          type='button'
          onClick={ () => {
            if (array.length > 0) setArray(array.slice(0, -1))
          } }
        >
          <BsDashLg />
        </button>
      </div>
    </fieldset>
  );
}

export default FormFieldArray;