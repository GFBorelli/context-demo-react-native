import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SignIn: React.FC = () => {
  const {signIn} = useContext(AuthContext);

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
