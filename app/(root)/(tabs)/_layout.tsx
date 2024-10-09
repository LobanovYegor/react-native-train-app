import { Drawer } from "expo-router/drawer";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="news"
          options={{
            drawerLabel: "News",
            title: "News",
          }}
        />
        <Drawer.Screen
          name="team"
          options={{
            drawerLabel: "Team",
            title: "Team",
          }}
        />
        <Drawer.Screen
          name="locations"
          options={{
            drawerLabel: "Locations",
            title: "Locations",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
