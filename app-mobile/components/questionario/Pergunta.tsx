import PerguntaModel from '@/data/model/Pergunta'
import { View, Text } from 'react-native'
import Enunciado from './Enunciado'
import Opcao from './Opcao'


export interface PerguntaProps {
    pergunta: PerguntaModel
    index: number
    onAnswer: (index: number, opcao: number) => void
}
export default function Pergunta(props: PerguntaProps) {
    const { pergunta, index, onAnswer } = props
    return (
        <View>
            <Enunciado enunciado={pergunta.enunciado} />
            <View>
                {pergunta.opcoes.map((opcao, indice) => (
                    <Opcao key={indice} indice={indice} texto={opcao} onPress={() => onAnswer(index, indice)} />
                ))}
            </View>
        </View >)

}