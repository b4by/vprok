import { useState, useEffect } from 'react'

export default function useScreenOrientation() {
    const [isPortrait, setPortrait] = useState(
        window.matchMedia('(orientation:portrait)').matches
    )

    useEffect(() => {
        const handleOrientationChange = () => {
            setPortrait(window.matchMedia('(orientation:portrait)').matches)
        }

        window.addEventListener('resize', handleOrientationChange)

        return () =>
            window.removeEventListener('resize', handleOrientationChange)
    }, [])

    return isPortrait
}
