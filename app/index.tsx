
import { Image, StyleSheet, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage(){
    return (
        <SafeAreaView style={s.wrap}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={s.body}>
                    <Text style={s.title}>Tela Inicial</Text>
                    <Text style={s.paragraph}>Meu primeiro APP usando react-native e expo</Text>
                </View>
                <View style={s.body2}>
                    <Image source={require("../assets/images/react-logo.png")}/>
                </View>
                <View style={s.body2}>
                    <TouchableOpacity style={s.btn}>
                        <Text style={s.btnText}>Ir para lista</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const s = StyleSheet.create({
    wrap:{
        flex:1,
    },
    body:{
        backgroundColor: '#090909',
        gap: 25
    },
    body2:{
        alignItems:'center'
    },
    title:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:30,
        fontWeight: 700,
        padding: 20,
    },
    paragraph:{
        color:'gray',
        textAlign: 'center',
        fontSize: 22,
        paddingBottom: 15

    },
    btn:{
        shadowColor:"#000",
    shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        backgroundColor: '#06525f',
        width:200,
        height: 60,
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 2,
        borderColor:'#090909',
        borderRadius: 999
    },
    btnText:{
        color:'#ffffff',
        fontSize: 22
    }

})