import React from 'react'
import style from '../styles/GlitchedText.module.css'

const GlitchedText: React.FC<any> = ({ text }) => {
    return (
        <div className={style.hero_container}>
            <div className={style.environment}></div>
            <h2 className={`${style.hero} ${style.glitch} ${style.layers}`} data-text="test"><span>{text}</span></h2>
        </div>
    )
}

export default GlitchedText