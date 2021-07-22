import EndLevel, { Header, Subtitle, Text } from 'components/end-level'

export default function GameOver() {
    return (
        <EndLevel>
            <Header>Уровень 1</Header>
            <Subtitle>Кажется недожирили...</Subtitle>
            <Text>Время вышло! Попробуем еще раз?</Text>
        </EndLevel>
    )
}
