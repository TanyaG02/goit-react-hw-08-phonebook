import React, { useState, useEffect } from 'react';
import './index.css';
import { nanoid } from 'nanoid';
import ContactForm from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const keyStorage = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(keyStorage));
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(
      contact => contact.name === newContact.name
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
