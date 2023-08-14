import React, {useEffect, useState} from 'react';

const UseEffectComponent = () => {
    const [text, setText] = useState('')

    // useEffect(() => {
    //     const handler = (e: KeyboardEvent) => {
    //         console.log(e.key, " <--- text is")
    //         setText(text + e.key)
    //     }
    //     window.document.addEventListener('keypress',handler)
    //     return () => {
    //         window.document.removeEventListener('keypress', handler)
    //     }
    // },[text])

    useEffect(() => {
        const time = setTimeout(() => {

        }, 3000)
        return () => {
            clearTimeout(time)
        }
    },[])

    const increase = () => setText(text + 1)

    return (
        <input value={text}>
            </input>
    );
};

export default UseEffectComponent;