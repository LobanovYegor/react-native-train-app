import NewsCard from "@/components/NewsCard";
import { mockedPortalNewData } from "@/mocks/MockedData";
import { PortalNewsData } from "@/models/data.models";
import { usePathname } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

const NewIndex = () => {
  const pathname = usePathname();
  const id = Number(pathname.split("/").pop()?.slice(1, -1));

  const newsData = mockedPortalNewData.filter(
    (news: PortalNewsData) => news.id == id,
  )[0];

  return (
    <SafeAreaView>
      <ScrollView>
        <NewsCard newsData={newsData} fullNews></NewsCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewIndex;
