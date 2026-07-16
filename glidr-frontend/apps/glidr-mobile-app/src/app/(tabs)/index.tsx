import { CategoriesSection, SearchBar } from "@/components/home";
// import { BottomNavigation } from "@/components/navigation";
import { router } from "expo-router";
import { ScrollView } from "react-native";


import PromoCarousel from "@/components/home/PromoCarousel";
import SupermarketSection from "@/components/home/SupermarketSection";

export default function HomeScreen() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 40,
            }}
        >
            <SearchBar
                editable={false}
                onPress={() => router.push("/search")}
            />
            <PromoCarousel />
            <SupermarketSection />
            <CategoriesSection />

            {/* <BottomNavigation /> */}
        </ScrollView>
    );
}