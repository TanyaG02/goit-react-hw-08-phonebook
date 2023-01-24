import React from 'react';
import './index.css';
import ContactForm from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { useFetchContactsQuery } from 'redux/CreateApiSlice';

export default function App() {
  const { data } = useFetchContactsQuery();
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />
      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList contacts={data} />}
    </div>
  );
}
