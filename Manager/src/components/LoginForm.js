import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }
  onButtonPress(){
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton(){
    if(this.props.loading){
      return <Spinner size='large' />
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render(){
    return (
     <Card>
       <CardSection>
        <Input
          label="Email"
          placeholder="email@email.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
       </CardSection>

       <CardSection>
         <Input
          secureTextEntry
          label="Password"
          placeholder="p@55w0rd!"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
         />
       </CardSection>
       <Text style={styles.errorStyle}>{this.props.error}</Text>
       <CardSection>
        {this.renderButton()}
       </CardSection>
     </Card>
    )
  }
}

const styles ={
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

const mapStateToProps = ({auth}) =>{
  console.log(auth)
  const { email, password, error, loading } = auth;
  return { email, password, error, loading }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
