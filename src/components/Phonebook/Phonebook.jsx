
import { useCallback, useEffect, useState} from "react"
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";

import { getContacts,getFilter } from "../../redux/phoneBook/phoneBook-selecctor";
import * as actions from "../../redux/phoneBook/phoneBook-actions";
import Filter from "./Filter";
import TitlePhonebook from "./TitlePhonebook";
import Form from "./Form"
import ContactList from "./ContactList";

const Phonebook = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    
    
    
    
    const dispatch = useDispatch()


    const deleted = useCallback(
    id => {
        return dispatch(actions.contactsDelete(id));
    },
    [dispatch]
    );
    
    useEffect(() => {
    
    localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
    
    const addContact = ({ name, number }) => {
        if (contacts.find(item => item === name.toLowerCase())) {
            alert(`${name} is already in your Phonebook`);
            return;
            }
        
            const newContact = {
            id: nanoid(),
            name,
            number,
            };
            
        return dispatch(actions.contactsAdd(newContact))
        
    }
    const filterr =useCallback(
    e => {
        return dispatch(actions.filter(e.target.value))
    },
    [dispatch]
    ); 

    const filteredContact = () => {
    if (!filter) {
            return contacts;
        }
        const filteredContacts = contacts.filter(({ name }) => {
            const res = name.toLowerCase().includes(filter.toLowerCase());
            return res;
        });
        
        return filteredContacts;
    }

    return ( 
            <div>
                <TitlePhonebook title='Phonebook'/>
            <Form
                onSubmit={addContact}
            />
            <TitlePhonebook
                title='Contacts'
            />
            <Filter
                onChange={filterr}
                filter={filter || ''}
            />
                <ContactList
                    contacts={filteredContact()}
                    deleted={deleted}
                />
            </div>
        )
}


export default Phonebook