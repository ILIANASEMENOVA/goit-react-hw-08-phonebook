import { createSelector } from '@reduxjs/toolkit';
import { selectContactFilter } from 'redux/filter/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectfindedContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, filter) => {
    console.log(filter);
    const formatedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formatedFilter)
    );
  }
);
