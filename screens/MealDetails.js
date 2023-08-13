import { Image, View, Text, StyleSheet, ScrollView ,Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import HeaderIcon from "../components/MealDetail/HeaderIcon";
import 'react-native-gesture-handler'

function MealDetails({ route , navigation}) {
  const mealId = route.params.id;
  function headerButtonPressHandler(){
    console.log('Pressed!')
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <HeaderIcon icon="star" color="white"  onPress={headerButtonPressHandler}/>
      }
    })
  },[])

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients </Subtitle>
            <List data={selectedMeal.ingredients} />
          </View>
          <View style={styles.listContainer}>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginBottom:16
  },
  image: {
    width: "100%",
    height: 300,
    maxHeight: "50%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    maxWidth: "80%",
    minWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
