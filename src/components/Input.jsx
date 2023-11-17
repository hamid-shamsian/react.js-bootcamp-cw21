const Input = ({ label, ...restProps }) => {
  return (
    <label className='flex-col inline-flex items-center gap-2'>
      <span>{label}</span>
      <input type='text' {...restProps} className='w-full p-1 border border-gray-300' />
    </label>
  );
};

export default Input;
