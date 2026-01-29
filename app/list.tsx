import { Header } from "@/components/header";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  dados from '@/assets/constants/mock'
import { Item } from "@/components/item";

export default function List() {

  const voltar = () => {
    router.push('/')
  }

  const next = () => {
    router.pull('/')

  }

  return (
    <>
      <Header image={require("@/assets/images/nike 1.webp")} />
      <View>
        <TouchableOpacity onPress={voltar}>
          <Text style={s.backBtn}>⬅️</Text>
        <TouchableOpacity onPress={next}>
          <Text style={s.exploreBtn}>➡️</Text>
        </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={s.wrapList}>
      <FlatList data={dados} renderItem={({item}) => (
        <Item model={item.Modelo} size={item.Tamanhos} image={item.imagem} value={item.valor}/>
      )}>

      </FlatList>

    </SafeAreaView>
    </>
  )
}

const s = StyleSheet.create({
  wrapList:{
    flex: 1
  },
    backBtn: {
      fontSize : 40,
      position: 'absolute',
      top: -52

  },
  exploreBtn:{
    fontSize: 40,
    position: '',
    top: -82

  }

})