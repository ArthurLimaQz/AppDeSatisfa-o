import { useState } from 'react'
import { View, Button, Alert, StyleSheet, Text } from 'react-native'
import Pergunta from './Pergunta'
import perguntas from '@/data/constants/perguntas'

export default function Questionario() {
    const [indicePergunta, setIndicePergunta] = useState<number>(0)
    const [respostas, setRespostas] = useState<number[]>([])
    const [questionarioConcluido, setQuestionarioConcluido] = useState<boolean>(false)

    function responder(indice: number, opcao: number) {
        // Atualiza as respostas
        const novasRespostas = [...respostas]
        novasRespostas[indice] = opcao
        setRespostas(novasRespostas)

        // Verifica se é a última pergunta
        const ehUltimaPergunta = indice === perguntas.length - 1

        if (ehUltimaPergunta) {
            // Se for a última, conclui o questionário.
            setQuestionarioConcluido(true)
        } else {
            // Se não for a última, avança para a próxima.
            setIndicePergunta(indicePergunta + 1)
        }
    }

    // Apenas renderiza se houver perguntas
    if (perguntas.length === 0) {
        return <View><Text>Nenhuma pergunta disponível.</Text></View>
    }

    // Se o questionário foi concluído, exibe a mensagem de sucesso
    if (questionarioConcluido) {
        return (
            <View style={styles.containerFinal}>
                <Text style={styles.textoFinal}>Obrigado pela sua avaliação 😊</Text>
                <Text style={styles.textoSubtitulo}>Sua avaliação foi enviada com sucesso!</Text>
            </View>
        )
    }

    // Se o questionário ainda não foi concluído, renderiza a pergunta atual
    return (
        <View style={styles.container}>
            <Pergunta
                key={perguntas[indicePergunta].id}
                pergunta={perguntas[indicePergunta]}
                index={indicePergunta}
                onAnswer={responder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    containerFinal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textoFinal: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    textoSubtitulo: {
        fontSize: 18,
        color: '#ccc',
        textAlign: 'center',
        marginTop: 10,
    }
})