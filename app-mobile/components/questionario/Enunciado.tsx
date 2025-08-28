import { View, Text } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export interface EnunciadoProps {
    enunciado: string

}
export default function Enunciado(props: EnunciadoProps) {
    return (
        <View>
            <Text style={{color:'#fff'}}> {props.enunciado}</Text>
        </View > )

}