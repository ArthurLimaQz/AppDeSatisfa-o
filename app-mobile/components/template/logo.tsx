import { Text, View, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View>
            <Text style={styles.primario}>Cartório de RCPN de Botelhos-MG</Text>
            <Text style={styles.secundario}>Avalie nosso atendimento!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: 'Roboto-Variable',
        fontSize: 20,
        color: '#fff',
        textAlign:'center',
        marginTop: 20,
        

    },
    secundario: {
        fontFamily: 'Roboto-Variable',
        fontSize: 15,
        color: '#fff',
        textAlign:'center',
        marginTop: 19,

    }
})