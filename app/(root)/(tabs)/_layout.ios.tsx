import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: "News",
          title: "News",
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          tabBarLabel: "Team",
          title: "Team",
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          tabBarLabel: "Locations",
          title: "Locations",
        }}
      />
    </Tabs>
  );
}
