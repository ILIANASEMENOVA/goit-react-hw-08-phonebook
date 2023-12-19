import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />

      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactList />
    </>
  );
}
