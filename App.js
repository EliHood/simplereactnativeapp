/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,TextInput,  Text, View} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Headline } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },

};
export default class App extends Component {

  state = {
    text: '',
    items:[]
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.text]
    }, () => {
      console.log(this.state.items)
    }) 
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  renderList = () => {
    return this.state.items.map( (item, i) => {
      return(
        <Text style={styles.itemList} key={i}>{item}</Text>
      )
    })
  }

  render() {

    const {items} = this.state;
    return (
      <PaperProvider theme={theme}>
    
       <View style={styles.container}>
       <Headline style={styles.welcome}> Enter A Text </Headline>
        <TextInput onChangeText={(text) => this.setState({ text: text})} 
          value={this.state.text}
          placeholder="Enter an Item"/>   
          <Button 
           mode="contained"
           onPress={this.onSubmit} 
           raised theme={{ roundness: 3 }}
           mode="outlined"
          >
            Submit
          </Button>
        {/* if array contains text that is more than 
            0 characters render list or else show
            No Items ye
         */}
        {items.length > 0  ?
            <View>
                {this.renderList()}        
            </View>
         :(
          <View> 
               {/* or show no items yet */}
               <Text style={styles.notice}>No Items yet</Text>
          </View>
        )}   
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:55
  },
  textInputs:{
    marginTop: 70
  },
  itemList:{
    marginTop: 30
  },
  notice:{
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    padding:30
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
