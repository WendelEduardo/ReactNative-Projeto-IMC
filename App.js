import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Animated } from 'react-native';

export default function App(){


  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt*alt);

    if(imc < 18.5){
      alert("Você está abaixo do peso! " + "IMC = " +imc.toFixed(2));
    }else if(imc >= 18.5 && imc <= 24.9){
      alert("Você está no peso ideal! " + "IMC = " + imc.toFixed(2))
    }else if(imc >= 25 && imc < 29.9){
      alert("Você está levemente acima do peso! " + "IMC = " + imc.toFixed(2))
    }
    else if(imc >= 30 && imc <= 34.9){
      alert("Você está com obesidade grau 1! " + "IMC = " + imc.toFixed(2))
    }
    else if(imc >= 35 && imc <= 39.9){
      alert("Você está com obesidade grau 2! " + "IMC = " + imc.toFixed(2))
    }
    else if(imc >= 40){
      alert("Você está com obesidade grau 3! " + "IMC = " + imc.toFixed(2))
    }
  }

  return(
    <View style={styles.container}>
      
      <Image style={styles.Image} source={require('./assets/balanca.png')}/>
      <Text style={styles.title}> Calcule seu IMC  </Text>
      
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

       <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={handleSubmit}
      >
        <Text style={styles.botaoTeste}>Calcular</Text>
      </TouchableOpacity>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f2f1ef',
  },
  title:{
    textAlign: 'center',
    fontSize:30,
    color:'#2e3131',
  },
  input:{
    backgroundColor:'#abb7b7',
    color:'#2e3131',
    borderRadius:1,
    marginTop:15,
    padding:10,
    fontSize:23,
    width:250,
  },
  botao:{
    justifyContent:'center',
    alignItems:'center',
    margin:45,
    backgroundColor:'#41Aef4',
    borderRadius:.4,
    padding:10,
    width:250,
  },
  botaoTeste:{
    justifyContent:'center',
    alignItems:'center',
    color:'#fff',
    fontSize:25,
  },
  Image:{
    width:80,
    height:80,
    marginBottom:50,
  },
});