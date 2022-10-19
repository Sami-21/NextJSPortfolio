import React from 'react'
import ScreenLightUp from './ScreenLightUp'
import LoadingWidget from './LoadingWidget'

const IntroComponents: React.FC = () => {
    return (
        <>
            <ScreenLightUp destroyDelay={500} />
            <LoadingWidget />
        </>
    )
}

export default IntroComponents