import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "@/theme";
import { Home } from "@/screens/Home";
import { CharactersDetails } from "@/screens/CharacterDetails";

import type { RootStackParamList } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="CharacterDetails"
        component={CharactersDetails}
        options={{
          headerTitle: "Detalhes do Personagem",
          headerTitleAlign: "center",
          headerTintColor: theme.COLORS.DARK,
        }}
      />
    </Navigator>
  );
}
