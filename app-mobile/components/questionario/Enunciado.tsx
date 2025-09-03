import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export interface EnunciadoProps {
    enunciado: string
}

export default function Enunciado(props: EnunciadoProps) {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            >
            </LinearGradient>
            <Text style={styles.text}>{props.enunciado}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
         backgroundColor: '#852E9C',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.9,
    },
})
