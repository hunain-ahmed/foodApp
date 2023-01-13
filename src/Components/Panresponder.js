import React from 'react'
import {useRef,useState}  from 'react'
import { PanResponder, StatusBar, } from 'react-native';
import {StyleSheet, Text,View,Dimensions,Animated,Button,SafeAreaView ,TouchableOpacity} from 'react-native'

//import styles from './styles';



const Panresponder = ({naviagtion}) => {
  const pan =useState( new Animated.ValueXY())[0];
  const panResponder =useState(
    PanResponder.create({
      onMoveShouldSetPanResponder:()=>true,
      onPanResponderGrant:()=>{
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove:(_,gesture)=>{
        pan.x.setValue(gesture.dx)
        pan.y.setValue(gesture.dy)
      },
       
      onPanResponderRelease:()=>{
        console.log({...pan.x}, 'before')
        pan.flattenOffset();
        console.log({...pan.x}, 'After')

      }
    })
  )[0]
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default Panresponder