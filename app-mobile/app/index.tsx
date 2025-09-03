import Pagina from "@/components/template/Pagina";
import Logo from "@/components/template/logo";
import Questionario from "@/components/questionario/Questionario";
import { View } from "react-native";

export default function Index() {
  return (
    <Pagina>
      <View style={{ gap: 30 }}>
        <Logo />
        <Questionario />
      </View>
    </Pagina>
  );
}