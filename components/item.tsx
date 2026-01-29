import {View, Text, StyleSheet} from "react-native"
import {Image} from 'expo-image'


export const Item  = ({model, size, image, value} : {model:string, size: string, image: string, value: string}) => {
    return(
        <View style={s.itemList}>
            <Image style={s.imageStyle} source={image} />
            <Text style={s.txt}>{model}</Text>
            <Text style={s.txt1}>{size}</Text>
            <Text style={s.txt3}>{value}</Text>
        
        </View>
    )
}

const s = StyleSheet.create({
    itemList:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        backgroundColor:'#4186a4',
        margin: 10,
        height: 200,
        borderRadius: 5,
        paddingHorizontal: 10,
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10, 
    },
    imageStyle:{
        width: 180,
        height: 180,
        borderRadius:5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.20,

elevation: 10,

    },
    txt:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    txt1:{
         color: '#fff',
        fontSize: 14,
        fontWeight: 'regular'    
        
    },
    txt3:{
         color: '#fff',
        fontSize: 14,
        fontWeight: 'regular'
    },

    

})