import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants';

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <AntDesign name="youtube" size={32} color="red" style={styles.logo}/>
            <Text style={styles.logoText}>YouTube</Text>
        </View>
        <View style={styles.actionBtns}>
            <Ionicons name="md-videocam" size={24} style={styles.icons} color="black" />
            <Ionicons name="md-search" size={24} style={styles.icons} color="black" />
            <MaterialIcons name="account-circle" size={24} style={styles.icons} color="black" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: Constant.statusBarHeight + 60,
    shadowColor: '#0000002f',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 20,  
    width: '100%',
    paddingStart: 20,
    paddingEnd: 20
  },
  logoContainer: {
      backgroundColor: "white",
      flexDirection: "row",
      alignItems: "center"
  },
  logo: {
      marginEnd: 5,
  },
  logoText: {
      fontWeight: 'bold',
      fontSize: 18
  },
  actionBtns: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  icons: {
      paddingHorizontal: 10
  }
});
