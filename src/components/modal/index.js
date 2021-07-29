import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { autorun } from 'mobx'
import { observer } from 'mobx-react'
import { useStore } from 'store/index'
import { useOnClickOutside } from 'hooks/useOnClickOutside'

const modalBackgroundPoses = {
    open: {
        background: 'rgba(38, 50, 56, 0.48)',
        backdropFilter: 'blur(1px)',
        applyAtStart: {
            display: 'block',
        },
    },
    closed: {
        background: 'rgba(0, 0, 0, 0)',
        applyAtEnd: {
            display: 'none',
        },
    },
}

const ModalBackground = styled(posed.div(modalBackgroundPoses))`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
`

const modalPoses = {
    open: {
        opacity: 1,
        transition: {
            opacity: {
                type: 'tween',
                duration: 200,
            },
        },
    },
    closed: {
        opacity: 0,
        transition: {
            opacity: {
                type: 'tween',
                duration: 200,
            },
        },
    },
}

const Modal = styled(posed.div(modalPoses))`
    position: fixed;
    background: white;
    width: fit-content;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

// eslint-disable-next-line import/no-anonymous-default-export
const ModalContainer = observer(({ children }) => {
    const ref = useRef()
    const { modal } = useStore()

    useOnClickOutside(ref, () => modal.closeModal())

    useEffect(() => {
        autorun(() => {
            if (modal.isOpen) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'unset'
            }
        })
    }, [])

    return (
        <ModalBackground
            initialPose="closed"
            pose={modal.isOpen ? 'open' : 'closed'}
        >
            <Modal ref={ref}>{children}</Modal>
        </ModalBackground>
    )
})

export default ModalContainer
