import { View, ImageBackground, Image } from "react-native";
import { styles } from '../styles/index'
 export default function Prueba() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        position: 'absolute',
        top: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderRightWidth: 400,
        borderTopWidth: 200,
        borderRightColor: 'transparent',
        borderTopColor: 'rgba(246,129,49,0.5)',
      }} />
      <View style={{
        position: 'absolute',
        top: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 500,
        borderTopWidth: 350,
        borderLeftColor: 'transparent',
        borderTopColor: 'rgba(246,129,49,0.5)',
      }} />
      {/* Aquí puedes añadir tus elementos hijos */}
    </View>
  );
}
