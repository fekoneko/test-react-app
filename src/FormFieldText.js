import React from "react";

const FormFieldText = ({ fieldId, fieldLabel, fieldPlaceholder, text, setText }) => {
  return (
    <fieldset>
      <label htmlFor={ fieldId }>{ fieldLabel }</label>
      <input
        autoFocus
        id={ fieldId }
        type='text'
        placeholder={ fieldPlaceholder }
        value={ text }
        onChange={ (e) => setText(e.target.value) }
        required
      />
    </fieldset>
  );
}

FormFieldText.defaultProps = {
  fieldLabel: '',
  fieldPlaceholder: '',
  text: '',
}

export default FormFieldText;