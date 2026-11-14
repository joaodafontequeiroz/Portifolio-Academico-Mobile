import { Screen } from '@/components/screen';
import { Forca } from '@/components/forca';

export default function Jogo() {
  return (
    <Screen
      kicker="./jogo-da-forca --start"
      title="Jogo da Forca_"
      subtitle="Seis erros antes do boneco completar — dica sempre à mão. Roda em React Native puro, sem WebView e sem link para a versão web."
    >
      <Forca />
    </Screen>
  );
}
