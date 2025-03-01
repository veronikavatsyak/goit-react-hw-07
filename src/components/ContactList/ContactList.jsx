import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) => {
    const lowercasedSearchQuery = search.toLowerCase();
    const lowercasedContactName = contact.name.toLowerCase();
    return lowercasedContactName.includes(lowercasedSearchQuery);
  });

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
