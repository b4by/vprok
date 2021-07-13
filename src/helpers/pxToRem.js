export  default function pxToRem(pxValue) {
    const ratio = 16; // Set according to the project configuration ratio
    pxValue = parseInt(pxValue);

    return pxValue / ratio + 'rem';
}
