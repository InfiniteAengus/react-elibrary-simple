import React from 'react';
// import './FinalFormInput.scss';

interface Props {
  component?: 'input' | 'textarea' | 'select';
  input: any;
  meta: any;
  label?: string;
  id?: string;
  options?: Array<Record<string, string | number>>;
  defaultValue?: string | number;
  pipe?: (value: string) => string;
}

const FinalFormInput = ({
  component = 'input',
  input,
  meta,
  label,
  id,
  pipe,
  options,
  defaultValue,
  ...props
}: Props) => {
  const handleChange = (e: any) => {
    input.onChange(pipe ? pipe(e.target.value) : e.target.value);
  };

  return (
    <div className={'flex flex-col grow'} id={id}>
      {label && <label>{label}</label>}
      {component !== 'select' && (
        <input
          type='text'
          {...props}
          onChange={handleChange}
          defaultValue={defaultValue}
          required
          className='border-[1px] outline-none p-2 rounded-md focus:border-primary transition-all ease-in-out duration-150'
        />
      )}
      {component === 'select' && (
        <select
          {...input}
          {...props}
          onChange={handleChange}
          defaultValue={defaultValue}
          className='border-[1px] outline-none p-2 rounded-md focus:border-primary transition-all ease-in-out duration-150'
        >
          <option disabled selected value=''>
            Please Select
          </option>
          {options?.map((value: any) => {
            return (
              <option key={value.id} value={value.id}>
                {value.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default FinalFormInput;
