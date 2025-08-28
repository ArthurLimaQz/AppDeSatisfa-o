import { ImageBackground, StyleSheet, View } from "react-native"

export interface PaginaProps {
    children: React.ReactNode
}

const background = require('@/assets/images/White Grey Abstract Organic Background Instagram Story.jpg')

export default function Pagina(props: PaginaProps) {
    return <view style={styles.container}>
        <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{opacity: 0.5}}
            >
            {props.children}
        </ImageBackground>
    </view>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})