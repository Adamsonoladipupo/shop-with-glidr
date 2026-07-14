import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { UserProvider } from "@/providers/UserProvider";
import {
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { ShoppingListProvider } from "@/context";
import { CartProvider } from "@/context";
import { OrderProvider } from "@/context/OrderContext";


export default function RootLayout() {

    const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,

    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (

    <UserProvider>
    <CartProvider>
      <ShoppingListProvider>
        <OrderProvider>

          <Stack
              screenOptions={{
                  headerShown: false,
                  animation: "fade",
                  contentStyle: {
                      backgroundColor: "#FFFFFF",
                  },
              }}
          />
        </OrderProvider>
      </ShoppingListProvider>
    </CartProvider>
    </UserProvider>

  );
}