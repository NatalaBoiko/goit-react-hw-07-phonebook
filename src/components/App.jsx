import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import './App.module.css';

import { useSelector } from 'react-redux';

// import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  const findContacts = () => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // const dispatch = useDispatch();

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContacts = contacts.some(
      i =>
        (i.name === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    );
    enterContacts
      ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  // const changeFilterInput = e => {
  //   setFilter(e.target.value);
  // };

  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  //   setFilter('');
  // };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={findContacts()} />

      {/* <ContactList contacts={findContacts()} deleteContact={deleteContact} /> */}
    </section>
  );
};
