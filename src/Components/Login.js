import {useRef,useState}  from 'react'
import { StatusBar } from 'react-native';

//import styles from './styles';
import {StyleSheet, Text,View,Dimensions,Animated,Button,SafeAreaView ,TouchableOpacity} from 'react-native'



const Login = ({navigation}) => {
//    const fadeAnim= useRef(new Animated.Value(0)).current;
//    const fadeIn=()=>{
//     Animated.timing(fadeAnim,{
//         toValue:1,
//         duration:5000,

//     }).start();
//    };
//    const fadeOut=()=>{
//     Animated.timing(fadeAnim,{
//         toValue:0,
//         duration:3000,
//     }).start();
//    };

//   return (
//     <SafeAreaView style={{
//         alignItems:'center',
//         justifyContent:'center',
//         flex:1,
//     }}>
//       <Animated.View style={{
//         padding:20,
//         backgrounndcolor:"powderblue",
//         opacity:fadeAnim,

//       }}> 
//         <Text style={{
//             fontSize:28,
//             fontWeight:'bold'
//         }}> Fading View</Text>
        
//         </Animated.View>
//     </SafeAreaView>
//   )
// }
const fadeAnim = useRef(new Animated.Value(0)).current;

const fadeIn = () => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000
  }).start();
};

const fadeOut = () => {
  // Will change fadeAnim value to 0 in 3 seconds
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 1000
  }).start();
};


// move ball function

  const value=useState(new Animated.ValueXY({x: 0, y: 0}))[0]
 const leftValue=useState(new Animated.Value(0))[0]
 const leftside=useState(new Animated.Value(0))[0]
 const opacity=useState(new Animated.Value(0))[0]
 
 function moveleft(){
  Animated.timing(leftValue,{
    toValue:1000,
    duration:2000,
    useNativeDriver:false
  }).start()
 }
 function comeback(){
  Animated.timing(leftValue,{
    toValue:0,
    duration:1000,
    useNativeDriver:false
  }).start()
 }
function moveBall(){
    Animated.spring(value,{
        toValue:{x:200, y:200},
        //duration:1000,
        useNativeDriver:false
    }).start()
}
function moveAgain(){
  Animated.timing(value,{
      toValue:{x:0, y:0},
      duration:1000,
      useNativeDriver:false
  }).start()
}
function goleft(){
  Animated.timing(leftside,{
    toValue:500,
    duration:5000,
    useNativeDriver:true
  }).start()
}
function come(){
  Animated.timing(leftside,{
    toValue:0,
    duration:2000,
    useNativeDriver:true
  }).start()
}
// fade in

function fade(){
  Animated.timing(opacity,{
    toValue:1,
    duration:1000,
    useNativeDriver:true,
  }).start()
}

function original(){
  Animated.timing(opacity,{
    toValue:0,
    duration:1000,
    useNativeDriver:true,
  }).start()
}
return (
  <SafeAreaView style={styles.container}>
    <Animated.View
      style={[
        styles.fadingContainer,
        {
          // Bind opacity to animated value
          opacity: fadeAnim
        }
      ]}
       >

      <Text style={styles.fadingText}>Fading View!</Text>
    
    </Animated.View>
    <View style={styles.buttonRow}>
      <Button title="Fade In View" onPress={fadeIn} />
      <Button title="Fade Out View" onPress={fadeOut} />
    </View>
    <View>
        <Animated.View style={value.getLayout()}>
        <View style={{
        width:100,
        height:100,
        borderRadius:100/2,
        backgroundColor:"red",
       


      }}></View>
      
      

        </Animated.View>
        
        
        <Button title="click me to move the ball" onPress={moveBall} />
        <Button title="set back" onPress={moveAgain} />
       
        
        

        {/* <TouchableOpacity onPress={()=>{moveBall()}}><Text>hey touch me</Text> </TouchableOpacity> */}
    <Animated.View   style={[       
 {       width:100,
        height:100,
        borderRadius:100/2,
        backgroundColor:"red",
        marginLeft:leftValue,

    } 
  ]}> 
 
     
    </Animated.View>
    <Button title="set " onPress={moveleft}/>
    <Button title="come back " onPress={comeback}/>
    
    </View>
 {/* usenative drive =ture */}
    <View style={{flex:1, justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
      <Animated.View style={[
        {
          width:100,
          height:100,
          transform:[{translateX:leftside}],
          borderRadius:100/2,
          backgroundColor:"red",

          
        }
      ]

      }></Animated.View>
      <Button title="go left with nativedrive=true " onPress={goleft}/>
      <Button title="wapis ao " onPress={come}/>

      <Animated.View style={[
        {
          width:100,
          height:100,
          opacity,
          borderRadius:100/2,
          backgroundColor:"red",

          
        }
      ]

      }></Animated.View>
      
    </View>
    <Button title="chl bhai shuru hoja " onPress={fade}/>
    <Button title="chl bhai hogya aja ab " onPress={original}/>
    <Button title="agy barho " onPress={()=>navigation.push('Pan')}/>

  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
},
fadingContainer: {
  padding: 20,
  backgroundColor: "powderblue"
},
fadingText: {
  fontSize: 28
},
buttonRow: {
  flexBasis: 100,
  justifyContent: "space-evenly",
  marginVertical: 16
}
});

export default Login