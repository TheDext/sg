import { Stack } from 'expo-router';

export default function RootLayout() {
  return (

      <Stack       screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen
            name="index"
            options={{ title: 'Главная' }}
        />

        <Stack.Screen
            name="documents"
            options={{ title: 'Необходимые документы' }}
        />

          <Stack.Screen
            name="ticket"
            options={{ title: 'Подача заявления' }}
        />

         <Stack.Screen
            name="deadlines"
            options={{ title: 'Сроки полуения' }}
         />

         <Stack.Screen
            name="refusal"
            options={{ title: 'Отказали в выплате?' }}
         />
          <Stack.Screen
            name="procedure"
            options={{ title: 'Куда обращаться для получения выплаты?' }}
         />
      </Stack>

  );
}