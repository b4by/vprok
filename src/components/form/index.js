import {
    StyledForm,
    StyledFormGroup,
    StyledEmailInput,
    StyledSubmitInput,
    StyledCheckboxContainer,
    StyledCheckboxInput,
    StyledCheckboxLabel,
    StyledCheckboxText,
    StyledFormLink,
    StyledFooterText,
    StyledFormError,
} from './styled'
import { useForm } from 'react-hook-form'
import { ReactComponent as CheckBoxIcon } from 'assets/svg/checkbox.svg'
import { useState, useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { useLocation } from 'react-router-dom'

export const Form = () => {
    const [checked, setChecked] = useState(true)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isDirty },
        control,
    } = useForm()

    const location = useLocation()

    const onSubmit = ({ email }) => {
        window.mindbox('sync', {
            operation: 'GetPromocodeForLevel3.ZadachaOnline',
            data: {
                customer: {
                    email: email,
                    subscriptions: [
                        {
                            brand: 'Perekrestok',
                            pointOfContact: 'Email',
                            isSubscribed: checked,
                        },
                    ],
                },
            },
            onSuccess: function (res) {
                console.log(res)
            },
            onError: function (error) {},
        })
        const tagManagerArgs = {
            dataLayer: {
                event: 'promo',
                eventCategory: 'click',
                eventAction: 'send_email_and_get_prize',
                eventLabel: location.pathname,
            },
        }
        TagManager.dataLayer(tagManagerArgs)
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledFormGroup>
                <StyledEmailInput
                    placeholder="E-mail"
                    {...register('email', { required: true })}
                />
                <StyledSubmitInput value="Забрать приз" />
                {errors.email && (
                    <StyledFormError>
                        Пожалуйста, введите свой e-mail
                    </StyledFormError>
                )}
            </StyledFormGroup>
            <StyledCheckboxContainer>
                <StyledCheckboxInput
                    id="acceptTerms"
                    onChange={() => {
                        setChecked(!checked)
                    }}
                    checked={checked}
                    {...register('acceptTerms', { required: true })}
                />
                <StyledCheckboxLabel htmlFor="acceptTerms">
                    <CheckBoxIcon onClick={() => setChecked(!checked)} />
                    <StyledCheckboxText>
                        Я ознакомлен(а) с
                        <StyledFormLink
                            href="https://www.vprok.ru/info/politics_personal_data"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Политикой обработки персональных данных
                        </StyledFormLink>
                        и даю согласие на
                        <StyledFormLink
                            href="https://www.vprok.ru/info/personal_data"
                            target="_blank"
                            rel="noreferrer"
                        >
                            обработку моих персональных данных
                        </StyledFormLink>
                        .
                    </StyledCheckboxText>
                </StyledCheckboxLabel>
                <StyledFooterText>
                    Все авторские права на текст принадлежат АО «Торговый дом
                    «ПЕРЕКРЕСТОК». Нарушение авторских прав может влечь
                    гражданско-правовую, административную и/или уголовную
                    ответственность.
                </StyledFooterText>
            </StyledCheckboxContainer>
        </StyledForm>
    )
}
