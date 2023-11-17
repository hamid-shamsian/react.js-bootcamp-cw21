import Input from "./components/Input";
import Contact from "./components/Contact";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/features/contactSlice";
import "./App.css";

const contactSchema = object({
  name: string().required("Name is required"),
  phone: string()
    .matches(/^09[0|1|2|3][0-9]{8}$/, "Phone is invalid")
    .required("Phone is required"),
  email: string().email("Email is Invalid").required("Email is required")
});

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = (values, formik) => {
    dispatch(addContact({ ...values, id: Date.now() }));
    formik.resetForm();
  };

  const formik = useFormik({ initialValues: { name: "", phone: "", email: "" }, validationSchema: contactSchema, onSubmit: handleSubmit });

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      <h1 className='text-center font-bold text-xl'>Phone Book App</h1>

      <form className='bg-gray-100 flex flex-col gap-3 w-96 mx-auto mt-5 p-10' onSubmit={formik.handleSubmit}>
        <Input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Name"}
          name='name'
          label='Name'
          id='name'
        />
        {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}

        <Input
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Phone"}
          name='phone'
          label='Phone Number'
          id='phone'
        />
        {formik.touched.phone && formik.errors.phone ? <span>{formik.errors.phone}</span> : null}

        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Email"}
          name='email'
          label='Email'
          id='email'
        />
        {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}

        <button className='bg-green-600 self-center p-2 text-white rounded-md' type='submit'>
          Add Contact
        </button>
      </form>

      <main className='flex flex-col gap-5 mx-auto w-96 mt-10'>
        {contacts.map(c => (
          <Contact key={c.id} contact={c} onDelete={handleDelete} />
        ))}
      </main>
    </>
  );
};

export default App;
