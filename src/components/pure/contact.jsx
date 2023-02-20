import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {
    

        return (
            <div>
                <h2>
                    name: {contact.name}
                </h2>
                <h2>
                    lastname: {contact.lastname}
                </h2>
                <h2>
                    email: {contact.email}
                </h2>
                <h2>
                    connected: {contact.connected ? 'online':'offline'}
                </h2>
            </div>
        );
    }


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf( Contact )
};


export default ContactComponent;
