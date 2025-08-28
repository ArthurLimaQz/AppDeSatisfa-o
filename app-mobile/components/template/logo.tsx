import { Text, View } from "react-native";

export default function Logo() {
    return (
        <View>
            <Text style={style.primeiro}>APLICATIVO DE SATISFAÇÃO</Text>
            <Text style={style.secundario}>Avalie nosso atendimento!</Text>
        </View>
    )
}

const style = StyleSheet.create({
    primario:{
        fontFamily: 'Roboto-Variable',

    },
    secundario:{

    }
})