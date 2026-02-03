import dados from "@/assets/constants/moc";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { router } from "expo-router";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  const voltar = () => {
    router.push("/list");
  };

  return (
    <>
      <Header image={require("@/assets/images/nike 1.webp")} />
      <View>
        <TouchableOpacity onPress={voltar}>
          <Text style={s.backBtn}>⬅️</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={s.wrapList}>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Item
              model={item.Modelo}
              size={item.Tamanhos}
              image={item.imagem}
              value={item.valor}
            />
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  wrapList: {
    flex: 1,
  },
  backBtn:{
    fontSize: 40,
    position: "absolute",
    top: -52,
  }
});
