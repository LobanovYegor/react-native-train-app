import LocationIcon from "@/assets/icons/location.icon";
import NewsIcon from "@/assets/icons/news.icon";
import TeamIcon from "@/assets/icons/team.icon";
import { Tabs } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#D61F26",
        tabBarInactiveTintColor: "#8C8C8C",
        tabBarStyle: {
          padding: 8,
          borderTopColor: "rgba(0,0,0,0.3)",
          borderTopWidth: 0.33,
        },
        header: ({ route }) => {
          return <TabsHeader title={route.name} />;
        },
      }}
    >
      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: "News",
          title: "News",
          tabBarIcon: ({ focused }) => (
            <NewsIcon color={focused ? "#D61F26" : "#8C8C8C"} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          tabBarLabel: "Team",
          title: "Team",
          tabBarIcon: ({ focused }) => (
            <TeamIcon color={focused ? "#D61F26" : "#8C8C8C"} />
          ),
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          tabBarLabel: "Locations",
          title: "Locations",
          tabBarIcon: ({ focused }) => (
            <LocationIcon color={focused ? "#D61F26" : "#8C8C8C"} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="logout"
        options={{
          tabBarLabel: "Log Out",
          title: "Log Out",
          tabBarIcon: ({ focused }) => (
            <LogoutIcon color={focused ? "#D61F26" : "#8C8C8C"} />
          ),
        }}
      /> */}
    </Tabs>
  );
}

const TabsHeader = ({ title }: { title: string }) => {
  return (
    <SafeAreaView>
      <View className="items-center">
        <Text className="text-lg font-bold color-brand-600 first-letter:uppercase">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Text>
        <View>
          <Text>Search wil appear here soon...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
