import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    paddingTop: 15,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    color: '#0a0e4f',
  },
  taskName: {
    // fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
    marginLeft: 7,
  },
  todoTitle: {
      marginTop: 10,
      marginLeft: 10,
      color: '#2A8547',
      fontWeight: 'bold',
      fontSize: 20,
  },
  taskWrapper: {
      borderWidth: 1,
      borderRadius: 10,
     margin: 8,
  },
  taskContainer: {
    marginVertical: 5,
  },
  taskDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',    
    color: '#000',
    fontSize: 15,
    marginLeft: 7,
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
    padding: 5,
  },
  btn: {
    width: 40,
    height: 40,
    backgroundColor: '#22A84B',
    borderRadius: 50,
    marginTop: 10,
    marginHorizontal: 240,
    justifyContent: 'center',
  },
  btnTitle: {
    color: '#F9FDFC',
    fontSize: 25,
    textAlign: 'center',

  },
});

export default styles;