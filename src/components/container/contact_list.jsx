import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactList = () => {

    const tristoban = new Contact('Matias', 'Ponce de León', 'hola@cloomy.us', true);

    return (
        <div>
            <div>Listado de usuarios</div>
            <ContactComponent contact={tristoban} ></ContactComponent>
        </div>
    );
}

export default ContactList;
