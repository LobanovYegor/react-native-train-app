import NewsCard from "@/components/NewsCard";
import TabBarItem from "@/components/TabBar";
import { mockedPortalNewData, NewsCategories } from "@/mocks/MockedData";
import { PortalNewsData } from "@/models/data.models";
import { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";

export default function NewsList() {
  const [activeFilterId, setActiveFilterId] = useState(0);

  const listData = mockedPortalNewData
    .filter(
      (news: PortalNewsData) =>
        !activeFilterId || news.category.id == activeFilterId,
    )
    .sort((a, b) => b.published_at - a.published_at);

  const newsFilters: { id: number; title: string }[] = [
    { title: "All news", id: NewsCategories.All },
    { title: "Events", id: NewsCategories.Events },
    { title: "Newcomers", id: NewsCategories.Newcomers },
    { title: "Company's life", id: NewsCategories.Company },
  ];

  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row">
          {newsFilters.map(({ title, id }) => (
            <TabBarItem
              tabName={title}
              active={id == activeFilterId}
              onPress={() => setActiveFilterId(id)}
              key={id}
            ></TabBarItem>
          ))}
        </View>
      </ScrollView>

      <FlatList
        data={listData}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <NewsCard newsData={item}></NewsCard>}
        ItemSeparatorComponent={() => (
          <View className="background-secondary-50 py-1"></View>
        )}
      />
    </SafeAreaView>
  );
}
