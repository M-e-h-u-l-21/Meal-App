import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // function onPressHandler(text){
  //   navigation.navigate("MealDetails",{
  //       title:text
  //   })
  // }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealsList items={displayedMeals/>

}

export default MealsOverviewScreen;
