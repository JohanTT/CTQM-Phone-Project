import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 15,
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    color: '#0a0e4f',
  },
  hooksTitle: {
      marginTop: 10,
      marginLeft: 10,
      color: '#2A8547',
      fontWeight: 'bold',
      fontSize: 30,
  },
  smallText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  btn: {
    backgroundColor: '#22A84B',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  btnTitle: {
    color: '#F9FDFC',
    fontSize: 25,
    textAlign: 'center',

  },
  smallBtn: {
    maxWidth: 100,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#555',
    padding: 2,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default styles;