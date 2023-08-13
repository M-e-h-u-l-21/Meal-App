import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View , StyleSheet} from "react-native";
import MealDetail from "./MealDetail";

function MealItem({id, title , imageUrl, duration , complexity, affordability}) {

  const navigation = useNavigation();

  function onPressHandler(){
    navigation.navigate('MealDetails',{
      id:id,
      title:title,
      imageUrl:imageUrl
    })
  }

  return (

    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:'#ccc'}}
       style={({ pressed }) => pressed ? styles.buttonPressed : null} onPress={onPressHandler}>
        <View>
          <Image source={{uri:imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
          <MealDetail duration={duration} affordability={affordability} complexity={complexity}/>
        </View>
      </Pressable>
     
    </View>
  );
}

export default MealItem;

const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:'white',
        overflow:'hidden',
        justifyContent:'center',
        elevation:4  
    },
    buttonPressed:{
        opacity:0.5
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    
})
