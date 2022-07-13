import React from 'react'
import Badge from 'react-bootstrap/Badge';
import styles from './ErrorMsg.module.css'

function ErrorMsg({msg}: {msg?: string}) {
    if (!msg || msg.trim() === '') {
        return null;
    }
    return (
        <Badge bg="light" text="danger" className="error">
            {msg}
        </Badge>
    )
}

export default ErrorMsg