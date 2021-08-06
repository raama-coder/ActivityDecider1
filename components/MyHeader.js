import * as React from 'react';
import { View } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import db from '../Config';

export default class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header
        backgroundColor="white"
        centerComponent={{
          text: this.props.title,
          style: { color: '#1352aa', fontSize: 25, fontWeight: 'bold' },
        }}
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="black"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        ></Header>
    );
  }
}
