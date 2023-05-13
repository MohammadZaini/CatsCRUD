import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddScreen from "./src/screens/AddScreen";
import EditScreen from "./src/screens/EditScreen";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/CatContext";

const navigator = createStackNavigator({
  Add: AddScreen,
  Edit: EditScreen,
  Index: IndexScreen,
  Show: ShowScreen
}, {
  initialRouteName: 'Index'
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  );
};