import { fetchDeleteContact } from 'redux/contacts/contactsOperations';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';

import { Button, List, ListItem, ListItemText } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <List sx={{}}>
      {contacts.map(contact => (
        <ListItem key={contact.id} name={contact.name} number={contact.number}>
          <ListItemText
            sx={{
              color: '#1976d2',
              justifyContent: 'space-between',
            }}
            primary={contact.name}
            secondary={contact.number}
          ></ListItemText>

          <Button
            variant="contained"
            size="small"
            color="secondary"
            sx={{
              width: '100px',
            }}
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
