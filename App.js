import * as React from 'react';
import { StyleSheet, SafeAreaView, View} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { SegmentedButtons, TextInput,Button,BottomNavigation } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import Tables from './tableManagementScreen';

export default function App() {

  const theme = useTheme();
  const { colors } = useTheme();
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
   
      <View style={styles.container}>
        
        <Tables/>

         </View>
    
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.ansi256,
  padding :10  },
  heading: {
    fontSize: 30,
    color: 'black',
    padding:20,
    paddingTop: 50,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
padding: 10,
  },
  button:{
    flex: 1, 
    justifyContent: 'flex-end',
    marginBottom: 36,
    width : '90%',
    color: 'black',
    paddingTop: 20,
  }
});
