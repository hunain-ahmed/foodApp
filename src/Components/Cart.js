import React,{useState} from 'react'
import { View,Text,TouchableOpacity,ScrollView,Icon,Image, } from 'react-native'
import { COLORS } from '../database/Item'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";




const Cart = ({navigation,route}) => {
   
    const [quantity, setQuantity] = useState(1)

  return (
 <View style={{
    width:'100%',
    height:'100%',
    backgroundColor:COLORS.white,
    position:'relative'
 }}>
    <ScrollView> 
        <View style={{
            //borderWidth:2,
            flexDirection:'row',
            //justifyContent:'space-around',
            alignItems:'center',
            padding:10
            
        }}>

        <TouchableOpacity    onPress={()=>navigation.goBack()}
         style={{
             width:40,
             height:40,
             borderRadius:10,
             borderWidth:1,
             borderColor:COLORS.black,
             justifyContent:'center',
             alignItems:'center',
             
             
             
            }}>
                <MaterialCommunityIcons  name="angle-left" style={{
                    fontSize:16,
                    color:COLORS.black,
                    
                }} />


        </TouchableOpacity>
        <View>
            <Text style={{
                fontSize:18,
                fontWeight:'bold',
                marginLeft:100,
                color:COLORS.black
            
            }}>Order Details</Text>
        </View>
                </View>
                <View style={{
                    //borderWidth:1,
                    padding:10
                   
                }}>
                    <Text style={{
                         fontSize:25,
                         fontWeight:'bold',
                         color:COLORS.black
                    }}> My Cart</Text>

                </View>
                <View>
                    <Image source={require('../database/images/burger/classicburger.png')}/>
                </View>
                <View style=
                {{
                    padding:10,
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'bold',
                        color:COLORS.black
                    }}>My Classic burger</Text>
                    <TouchableOpacity  style={{
                            width:"50%",
                            height:40,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:COLORS.black,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:COLORS.accent
                            
                    }}>
                        <View> 
                            <Text style={{
                                color:COLORS.black,
                                fontWeight:"bold"
                            }}>ADD TO CART</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-around',
                    marginTop:30,
                    
                }}>
                    <View>

                    <Text style={{
                        fontWeight:'bold',
                        fontSize:18,
                        color:COLORS.black
                    }}> Click to ADD</Text>
                    </View>
                 

                             <TouchableOpacity onPress={()=>{
                                 setQuantity(quantity+1)
                             }}style={{
                                width:30,
                             height:30,
                             borderRadius:10,
                             borderWidth:1,
                             borderColor:COLORS.black,
                             justifyContent:'center',
                             alignItems:'center',
                             backgroundColor:COLORS.accent
  
                             }}>
                                 <Text style={{
                                    fontSize:18,
                                    color:COLORS.black,
                                    fontWeight:'bold'
                                 }}>+</Text>
                             </TouchableOpacity>
                    <View 
                         style={{
                             width:30,
                             height:30,
                             borderRadius:10,
                             borderWidth:1,
                             borderColor:COLORS.black,
                             justifyContent:'center',
                             alignItems:'center',
                             backgroundColor:COLORS.accent
                             
                             
                             
                            }}>                       
                           <Text style={{
                            fontSize:18,
                            color:COLORS.black,
                            fontWeight:'bold',
                            
                           }} >{quantity}</Text>
                    

                </View>
                <TouchableOpacity onPress={()=>{
                    setQuantity(quantity - 1)
                }} style={{
                    width:30,
                             height:30,
                             borderRadius:10,
                             borderWidth:1,
                             borderColor:COLORS.black,
                             justifyContent:'center',
                             alignItems:'center',
                             backgroundColor:COLORS.accent
  
                }}>
                    <Text style={{
                        fontSize:18,
                        color:COLORS.black,
                        fontWeight:'bold'
                    }}>-</Text>
                </TouchableOpacity>
                    </View>
                    <TouchableOpacity  style={{
                            width:"80%",
                            height:50,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:COLORS.black,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:COLORS.accent,
                            alignSelf:'center',
                            marginTop:60
                            
                    }} onPress={()=>navigation.push('login')}  >
                        <View> 
                            <Text style={{
                                color:COLORS.black,
                                fontWeight:"bold",
                                fontSize:22,
                            }}>CONFIRM ORDER</Text>
                        </View>
                    </TouchableOpacity>
                
                
      
    </ScrollView>

 </View>
  )
}

export default Cart