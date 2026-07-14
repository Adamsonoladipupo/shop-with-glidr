import React, {
  useRef,
  useState,
} from "react";

import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

import PromoCard from "./PromoCard";
import CarouselIndicator from "./CarouselIndicator";

import { promotions } from "@/mock/promotions.data";


const { width } = useWindowDimensions();
const CARD_WIDTH = width - 40;

export default function PromoCarousel() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const onScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        CARD_WIDTH
    );

    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={promotions}

        horizontal

        pagingEnabled

        snapToInterval={CARD_WIDTH + 40}

        decelerationRate="fast"

        showsHorizontalScrollIndicator={false}

        keyExtractor={(item) => item.id}

        onMomentumScrollEnd={onScroll}

        renderItem={({ item }) => (
            <PromoCard
                title={item.title}
                description={item.description}
                image={item.image}
                backgroundColor={item.backgroundColor}
            />
        )}
    />
    <CarouselIndicator
        count={promotions.length}
        currentIndex={currentIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
});