import { Form, Button } from './Form.styled';
import { useCreateContactMutation } from 'redux/CreateApiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm({ contacts }) {
  const [createContact] = useCreateContactMutation();
  const handleSubmit = evt => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.name.value;
    const phone = evt.currentTarget.elements.number.value;
    const newContact = { name, phone };

    if (
      !contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      try {
        createContact(newContact);
        toast.success('Added');
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error('Is already in the contacts');
    }
    evt.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name{' '}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number{' '}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
      <ToastContainer />
    </Form>
  );
}
