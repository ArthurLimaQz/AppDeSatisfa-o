import Pagina from "@/components/template/Pagina";
import Logo from "@/components/template/logo";
import Pergunta from "@/components/questionario/Pergunta";
import perguntas from "@/data/constants/perguntas";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <Pagina>
      <View style={{ gap: 30 }}>
        <Logo />
        <Pergunta pergunta={perguntas[0]} />
      </View>
    </Pagina>
  );
}
