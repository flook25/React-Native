import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Header</Text>
      </View>

      <View style={style.content}>
        <View style={style.sidebar}>

          <Text>sidebar</Text>
        </View>
      
      <View style={style.mainContent}>

      </View>



      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  }, 
  content : {
    flex: 1,
    flexDirection: 'row'
  },
  sidebar : {
    width: 100,
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center'
  },
  mainContent: {
    flex:1 , 
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'

  }
  });