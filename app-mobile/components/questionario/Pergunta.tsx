import PerguntaModel from '@/data/model/Pergunta'
import { View, Text } from 'react-native'
import Enunciado from './enunciado'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export interface PerfuntaProps {
    pergunta: PerguntaModel

}
export default function Pergunta(props: PerfuntaProps) {
    return (
        <View>
           <Enunciado enunciado={props.pergunta.enunciado}/>
        </View > )

}