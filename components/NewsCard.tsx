import { View, Text, Image, TouchableOpacity } from "react-native";

import { PortalNewsData } from "@/models/data.models";
import LikeIcon from "@/assets/icons/like.icon";
import colors from "@/constants/Colors";
import { useEffect, useState } from "react";
import { generalPortalApiUrl } from "@/mocks/MockedData";
import { useRouter } from "expo-router";
import { HtmlTagsRemover, TimestampToDate } from "@/utils/utils";
import BackArrowIcon from "@/assets/icons/back_arraow";

interface NewsCardProps {
  newsData: PortalNewsData;
  fullNews?: boolean;
}

export default function NewsCard({ newsData, fullNews }: NewsCardProps) {
  const [aspectRatio, setAspectRatio] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const imageUrl = Object.values(newsData.images.small || {})[0];

    Image.getSize(`${generalPortalApiUrl}${imageUrl}`, (width, height) => {
      setAspectRatio(width / height);
      setImageUrl(`${generalPortalApiUrl}${imageUrl}`);
    });
  }, []);

  return (
    <View className={`bg-brand-200 pb-4 ${!fullNews && "pt-6"}`}>
      {fullNews && (
        <View className="flex-row bg-secondary-50 px-2 py-3 items-center mb-5">
          <TouchableOpacity onPress={() => router.back()} className="p-2">
            <BackArrowIcon color={colors.brand["700"]} />
          </TouchableOpacity>
          <Text
            className="text-xl font-bold uppercase flex-1 pl-2"
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {newsData?.title}
          </Text>
        </View>
      )}
      <View className="px-4">
        {!fullNews && (
          <TouchableOpacity
            onPress={() => router.push(`(root)/news/[${newsData.id}]`)}
          >
            <Text className="mb-2 text-xl font-bold uppercase">
              {newsData.title}
            </Text>
          </TouchableOpacity>
        )}
        <View className="flex-row">
          <Text className="mb-1 text-xs color-secondary-400">
            Written by&nbsp;
          </Text>
          <TouchableOpacity
            onPress={() => router.push(`(root)/team/[${newsData.author.id}]`)}
          >
            <Text className="mb-1 text-xs color-secondary-400 underline">
              {newsData.author.display_name}
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xs color-secondary-400">
          {TimestampToDate(newsData.published_at)}
        </Text>
      </View>

      {/* TODO: The next VIEW will be updated to contain carousel component */}
      <View className="w-full flex py-4 overflow-hidden">
        <Image
          className="w-full"
          source={{ uri: imageUrl || undefined }}
          resizeMode="cover"
          style={{ aspectRatio }}
        ></Image>
      </View>

      <View>
        <Text
          className="px-4 text-sm"
          ellipsizeMode={fullNews ? undefined : "tail"}
          numberOfLines={fullNews ? undefined : 3}
        >
          {HtmlTagsRemover(newsData.content)}
        </Text>
        <View className="flex-row px-2 pt-2">
          <TouchableOpacity className="flex-row py-3 px-2 grow-0">
            <Text className="text-secondary-300 pr-1">
              {newsData.likes.length}
            </Text>
            <LikeIcon color={colors.secondary["300"]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
