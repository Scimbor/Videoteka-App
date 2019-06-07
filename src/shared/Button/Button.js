import React from 'react'
import { Button } from './Button.style'

const ButtonComponent = props => {
    return <Button {...props}>
        {props.children}
    </Button>
}

export default ButtonComponent