import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ number, id, name }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};
