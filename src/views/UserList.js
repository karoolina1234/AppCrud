import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import users from '../data/Users'
import { ListItem ,Avatar} from 'react-native-elements';
import { Button, Icon } from 'react-native-elements/dist/buttons/Button';

export default props => {
  // console.warn(Object.keys(props))
 function getUserItem({item: user}){
  return (
      <ListItem
        bottomDivider
        onPress={()=> props.navigation.navigate("UserForm")}>
        <Avatar title={user.name} source={{uri: user.avatarUrl}}/>
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
            onPress={() => props.navigation.navigate('UserForm', user)}
            iconProps={{name: "edit"}}
            iconStyle={{fontSize: 25, color: "orange"}}
          />
          <ListItem.Chevron
            onPress={()=>console.warn('deletado')}
            iconProps={{name: 'delete'}}
            iconStyle={{fontSize: 25, color: "red"}}
          />
      </ListItem>
    )
 }
  return (
    <View>
      <FlatList
        keyExtractor={user=> user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
};
