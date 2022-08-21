import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

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
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <ul>
          {filteredContacts.map(({ id, name, phone }) => {
            return (
              <li key={id}>
                <div>
                  <h3>{name}:</h3>
                  <p>{phone}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  {isLoading ? '...' : 'Delete'}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
