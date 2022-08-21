// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import './ContactForm.module.css';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const dispatch = useDispatch();

  // const handleChange = event => {
  //   // console.log(event.target.value, event.target.name);
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const enterContacts = contacts.some(
  //     contact =>
  //       (contact.name === name.toLowerCase() && contact.number === number) ||
  //       contact.number === number
  //   );
  //   enterContacts
  //     ? alert(`${name} or ${number} is already in contacts`)
  //     :
  //   dispatch(addContact(contact));

  //   setName('');
  //   setNumber('');
  // };

  return (
    <form>
      <input
        type="text"
        name="name"
        // value={name}
        // onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        // value={number}
        // onChange={handleChange}
        placeholder="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

// ContactForm.prototypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
//   onSubmit: PropTypes.func,
// };
