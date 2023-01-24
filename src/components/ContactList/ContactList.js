import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter.value);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ul>
      {visibleContacts().map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
