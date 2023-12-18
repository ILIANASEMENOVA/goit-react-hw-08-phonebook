import { useSelector } from 'react-redux';
import ContactsListStyled from './ContactList.styled';

import { selectfindedContacts } from 'redux/contacts/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const findedContacts = useSelector(selectfindedContacts);

  return (
    <ContactsListStyled>
      <ul>
        {findedContacts.map(({ name, id, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </ContactsListStyled>
  );
};
