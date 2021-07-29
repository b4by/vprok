import { useLocation } from 'react-router'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

export const Location = ({ children }) => {
    let location = useLocation()

    useEffect(() => {
        const tagManagerArgs = {
            dataLayer: {
                event: 'promo',
                eventCategory: 'pageview',
                eventAction: 'pageview',
                eventLabel: location.pathname,
            },
        }
        TagManager.dataLayer(tagManagerArgs)
    }, [location.pathname])

    return <>{children}</>
}
