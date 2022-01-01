import React, {FunctionComponent } from 'react'

type TextProps = {
    text: String
}

const Text: FunctionComponent<TextProps> = function ({text}){
    return <div>{text}</div>
}

export default Text