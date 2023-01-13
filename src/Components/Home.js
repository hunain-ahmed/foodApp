import React from 'react';
import { View,Text, ScrollView, StatusBar, TouchableOpacity,Image, TextInput, FlatList, Button } from 'react-native';
import { Categories, COLORS } from '../database/Item';
import Material from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useState} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Home=({navigation})=>{
    const [currentSelected,setCurrentSelected]=useState([0])
    const renderCategories=({item, index})=>{
        return(
            <TouchableOpacity activeOpacity={0.9} onPress={()=>setCurrentSelected(index)}>
                <View style={{
                    width:120,
                    height:180,
                    justifyContent:'space-evenly',
                    alignItems:'center',
                    backgroundColor:currentSelected==index ? COLORS.accent : COLORS.white,
                    borderRadius:20,
                    margin:10,
                    elevation:5, 
                    
                }}>
                    <View style={{
                        width:60,
                        height:60,
                    }}>
                        <Image 
                        source={item.image}
                        style={{
                            width:'100%',
                            height:'100%',
                            resizeMode:'center',

                        }}/>

                    </View>
                    <Text style={{
                        fontSize:16,
                        color:COLORS.black,
                        fontWeight:'600',
                    }}>
                        {item.name}
                    </Text>
                    <View style={{
                        width:30,
                        height:30,
                        borderRadius:100,
                        backgroundColor:currentSelected == index ? COLORS.white : COLORS.accentRed,
                        justifyContent:'center',
                        alignItems:'center',
                    }}>


                <FontAwesome name="angle-right" style={{
                    fontSize:12,
                    color:currentSelected==index ? COLORS.black: COLORS.white,
                }}/>
                </View>
                </View>
            </TouchableOpacity>
        )
            
        
    };
    const renderItem =(data,index)=>{
        return(
            <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                style={{
                    width:'100%',
                    height:180,
                    justifyContent:'center',
                    alignItems:'center',
                }} 
                onPress={()=>navigation.push('details',{
                    name:data.name,
                    price:data.price,
                    image:data.image,
                    size:data.size,
                    crust:data.crust,
                    delivery:data.delivery,
                    ingredients:data.ingredients,
                    isTopOfTheWeek:data.isTopOfTheWeek,
                    navigation:navigation,
                }    )} >
                    
                <View style={{
                    width:'90%',
                    height:160,
                    backgroundColor:COLORS.white,
                    borderRadius:20,
                    elevation:4,
                    position:'relative',
                    padding:15,
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems:'center'
                    }}>
                        <View style={{
                            marginBottom:50,
                        }}>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                display:data.isTopOfTheWeek ? 'flex' :'none'

                            }}><FontAwesome name="crown"
                            style={{
                                fontsize:10,
                                color:COLORS.accent,

                            }}/>
                            <Text style={{
                                fontSize:12,
                                color:COLORS.black,
                                opacity:0.8,
                                marginLeft:5,
                            }}>top of the week</Text> 
                            </View>
                            <Text style={{
                                fontSize:22,
                                color:COLORS.black,
                                fontWeight:'bold',
                                paddingTop:10,
                            }}> {data.name}</Text>
                            <Text style={{
                                fontSize:12,
                                color:COLORS.black,
                                opacity:0.5,
                            }}>
                                {data.weight}
                            </Text>
                        </View>
                        <View style={{
                            width:150,
                            height:150,
                            marginRight:-45
                            
                        }}>
                           

                            <Image source={data.image} style={{
                                width:'100%',
                                height:'100%',
                                resizeMode:'contain'
                            }}/>
                        </View>
                        <View style={{

                            position:'absolute',
                            bottom:0,
                            flexDirection:'row',
                            alignItems:'center',
                        }}>
                            <View style={{
                                width:85,
                                height:50,
                                backgroundColor:COLORS.accent,
                                borderTopRightRadius:20,
                                borderBottomLeftRadius:20,
                                justifyContent:'center',
                                alignContent:'center',
                            }}>
                                <Entypo name="plus" style ={{
                                    fontsize:18,
                                    color:COLORS.black,
                                }}/>

                            </View>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginLeft:20,
                            }}>
                                <AntDesign name="star" style={{
                                   fontSize:12,
                                   color:COLORS.black,
                                   paddingRight:5, }}/>
                                   <Text style={{
                                    fontsize:15,
                                    color:COLORS.black,
                                    fontWeight:'bold',

                                   }}> {data.rating}</Text>
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }
  

    return(
        <View style={{
            width:'100%',
            height:'100%',
            backgroundColor:COLORS.white,
        }}> 
            <ScrollView showsVerticalScrollIndicator={false} >
                <View  style={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:COLORS.white,
                    position:'relative',
                }}>
                <StatusBar backgroundColor={COLORS.white}barStyle="dark-content"/>
                <Image source={require('../database/images/background.png')}
                style={{
                    position:'absolute',
                    top:0,
                    left:-100,
                }}/>
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    padding:20,
                }}>
                    <TouchableOpacity
                    style={{
                        width:40,
                        height:40,
                    }}>
                        <Image 
                        source={require('../database/images/profile.jpg')}
                        style={{
                            width:'100%',
                            height:'100%',
                            resizeMode:'contain',
                            borderRadius:500,
                        }}/>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Material name="segment" style={{
                            fontSize:28,
                            color:COLORS.black,

                        }}
                        />
                    </TouchableOpacity>

                </View>
                <View style={{
                    padding:20
                }}>
                    <Text style={{ fontSize:16,
                    color:COLORS.black,
                    opacity:0.5,
                    fontWeight:'400',}}>Food</Text>
                    <Text
                    style={{
                        fontSize:40,
                        color:COLORS.black,
                        fontWeight:'600',
                        letterSpacing:2,
                    }}>Delivery
                    </Text>

                </View>
                <View style={{
                    paddingHorizontal:20,
                    paddingVertical:10

                }}>
                    <Ionicons name="search" style={{
                        fontSize:20,
                        color:COLORS.black,
                        opacity:0.8,

                    }}/>
                    <TextInput 
                    placeholder='Search...'
                    style={{
                        color:COLORS.black,
                        fontSize:16,
                        paddingVertical:5,
                        borderBottomWidth:1,
                        borderBottomColor:COLORS.black+20,
                        width:'90%',
                        marginLeft:10,
                        letterSpacing:1,
                    }}/>

                </View>
                <Text style={{
                    paddingTop:20,
                    paddingHorizontal:20,
                    fontWeight:'700',
                    color:COLORS.black,
                    letterSpacing:1,
                }}>Categories </Text>
                <FlatList horizontal={true} data={Categories}
                renderItem={renderCategories}
                showsHorizontalScrollIndicator={false}/>
                <Text style={{
                    paddingTop:20,
                    paddingHorizontal:20,
                    fontSize:18,
                    fontWeight:'700',
                    color:COLORS.black,

                }}>Popular</Text>
              {
                Categories[currentSelected].items.map(renderItem)
              }
              <TouchableOpacity style={{
                margin:30,
                justifyContent:'center',
                alignItems:"center",
                opacity:0.5
              }}>
                <Text style={{
                    fontsize:16,
                    color:COLORS.black,
                    borderBottomWidth:1,
                    borderBottomColor:COLORS.black,

                }}>Laod More</Text>
              </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default Home