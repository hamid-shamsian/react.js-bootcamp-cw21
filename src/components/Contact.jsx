const Contact = ({ contact, onDelete }) => {
  const { name, phone, email } = contact;

  return (
    <article className='flex gap-5 items-center justify-center bg-[#f9f9f9] p-2 rounded-md'>
      <p>
        {name} - {phone} - {email}
      </p>
      <button className='bg-red-600 self-center p-2 text-white rounded-md' onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </article>
  );
};

export default Contact;
