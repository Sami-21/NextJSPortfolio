import React from 'react'
import CODTextEffect from './CODTextEffect'
import style from '../styles/SkillsSection.module.css'

const SkillsSection: React.FC = () => {
    const Transition1 = "Qortav";
    const Transition2 = "Wpolmg";
    const Transition3 = "Skills";

    return (
        <div className={style.SkillsContainer}>
            <CODTextEffect
                transition1={Transition1}
                transition2={Transition2}
                transition3={Transition3}
            ></CODTextEffect>
        </div>
    )
}

export default SkillsSection