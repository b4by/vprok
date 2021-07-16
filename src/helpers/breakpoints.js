export const size = {
 xs: `320`,
 sm: `1024`,
 lg: `1920`,
}

export const breakpoints = {
 mobile: `@media only screen and (min-width: ${size.xs}px)`,
 tablet: `@media only screen and (min-width: ${size.sm}px)`,
 desktop: `@media only screen and (min-width: ${size.lg}px)`,
 onlyMobile: `@media only screen and (max-width: ${size.sm - 1}px)`,
 onlyTablet: `@media only screen and (min-width: ${size.sm}px) and (max-width: ${size.lg - 1}px)`,
 onlyDesktop: `@media only screen and (min-width: ${size.lg}px)`
}
