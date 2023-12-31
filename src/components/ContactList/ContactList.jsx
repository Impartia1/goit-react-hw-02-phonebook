import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';


const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}/>
    ))}
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string.isRequired)),
  onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;














