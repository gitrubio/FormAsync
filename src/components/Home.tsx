import { View, ImageBackground, Image } from "react-native";
import { styles } from '../styles/index';
import Svg, { G, Path } from 'react-native-svg';
export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Svg width="250" height="250" viewBox="0 0 192.756 192.756">
          <Path fill="#182257" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"/>
      </Svg>
    </View>

  );
}
