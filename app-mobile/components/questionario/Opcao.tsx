import { Pressable, Text, StyleSheet } from "react-native"


export interface OpcaoProps {
    indice: number
    texto: string
    onPress: () => void
}
export default function Opcao(props: OpcaoProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6b3c9c',
        padding: 8,
        borderRadius: 8,
        marginVertical: 4,
        alignItems: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    }
})