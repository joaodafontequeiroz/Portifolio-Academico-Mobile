import { JetBrainsMono_400Regular, JetBrainsMono_500Medium } from '@expo-google-fonts/jetbrains-mono';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import {
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { DrawerContent } from '@/components/drawer-content';
import { colors } from '@/constants/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Drawer
          drawerContent={() => <DrawerContent />}
          screenOptions={{
            headerShown: false,
            drawerType: 'front',
            drawerStyle: {
              backgroundColor: colors.bgSoft,
              width: 312,
            },
            overlayColor: colors.overlay,
            swipeEdgeWidth: 80,
            sceneStyle: { backgroundColor: colors.bg },
          }}
        >
          <Drawer.Screen name="index" options={{ title: 'início' }} />
          <Drawer.Screen name="sobre" options={{ title: 'sobre' }} />
          <Drawer.Screen name="academica" options={{ title: 'experiência acadêmica' }} />
          <Drawer.Screen name="profissional" options={{ title: 'experiência profissional' }} />
          <Drawer.Screen name="projetos/index" options={{ title: 'projetos' }} />
          <Drawer.Screen name="projetos/[slug]" options={{ title: 'projeto' }} />
          <Drawer.Screen name="jogo" options={{ title: 'jogo da forca' }} />
        </Drawer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
