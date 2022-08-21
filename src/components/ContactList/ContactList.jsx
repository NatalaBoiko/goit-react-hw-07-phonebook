import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { useGetContactsQuery } from '../../redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  console.log(filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  console.log(contacts);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {contacts ? (
        <ul>
          {filteredContacts.map(({ id, name, phone }) => {
            return (
              <li key={id}>
                <div>
                  <h3>{name}:</h3>
                  <p>{phone}</p>
                </div>
                <button type="button">Delete</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>The contact list is empty</p>
      )}
    </>
  );
};
