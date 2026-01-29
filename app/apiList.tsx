import { Header } from "@/components/header";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  return (
    <SafeAreaView>
      <Header image={require("@/assets/images/nike 1.webp")} />
      <View>
        <Text>TESTE</Text>
      </View>
    </SafeAreaView>
  )
}
