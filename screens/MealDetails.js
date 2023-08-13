import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetails({ route }) {
  const mealId = route.params.id;

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
