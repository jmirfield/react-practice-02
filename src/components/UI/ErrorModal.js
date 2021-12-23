import ReactDOM from 'react-dom'
import React from 'react'

import Card from './Card'
import Button from './Button'
import styles from './ErrorModal.module.css'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onButton}></div>
}

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <div>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onButton}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onButton={props.onButton} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    onButton={props.onButton}
                    title={props.title}
                    message={props.message} />,
                document.getElementById("overlay-root")
            )}
        </>
    )
}

export default React.memo(ErrorModal);