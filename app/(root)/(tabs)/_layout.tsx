import LocationIcon from "@/assets/icons/location.icon";
import LogoutIcon from "@/assets/icons/logout.icon";
import NewsIcon from "@/assets/icons/news.icon";
import TeamIcon from "@/assets/icons/team.icon";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { Drawer } from "expo-router/drawer";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as logo from "@/assets/images/logo.png";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: "#FFF", width: 360 },
          drawerItemStyle: {
            padding: 8,
            marginHorizontal: 0,
            marginVertical: 0,
            borderRadius: 0,
          },
          drawerLabelStyle: { marginLeft: -20 },
          drawerActiveBackgroundColor: "#F2F2F2",
          drawerActiveTintColor: "#D61F26",
        }}
        drawerContent={DrawerContent}
      >
        <Drawer.Screen
          name="news"
          options={{
            drawerLabel: "News",
            title: "News",
            drawerIcon: ({ focused }) => (
              <NewsIcon color={focused ? "#D61F26" : "#000"} />
            ),
          }}
        />
        <Drawer.Screen
          name="team"
          options={{
            drawerLabel: "Team",
            title: "Team",
            drawerIcon: ({ focused }) => (
              <TeamIcon color={focused ? "#D61F26" : "#000"} />
            ),
          }}
        />
        <Drawer.Screen
          name="locations"
          options={{
            drawerLabel: "Locations",
            title: "Locations",
            drawerIcon: ({ focused }) => (
              <LocationIcon color={focused ? "#D61F26" : "#000"} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          paddingRight: 4,
          borderBottomColor: "#CACACA",
          borderBottomWidth: 1,
        }}
      >
        <Image
          style={{
            width: 48,
            height: 48,
            borderWidth: 1,
            borderColor: "#CACACA",
          }}
          source={logo}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 1,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 400,
              fontFamily: "EtelkaText",
              lineHeight: 24,
            }}
          >
            Name
          </Text>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#DBDBDB",
              borderStyle: "solid",
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "EtelkaMedium",
                color: "#8C8C8C",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                lineHeight: 18,
              }}
            >
              Role
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {}}
        >
          <LogoutIcon color="#000"></LogoutIcon>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
