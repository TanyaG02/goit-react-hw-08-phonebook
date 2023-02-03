import ContactForm from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from './styles/Contacts.styled';
import Typography from '@mui/material/Typography';

const ContactsView = () => {
  return (
    <Container>
      <ContactForm />
      <Typography component="h1" variant="h5">
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsView;
