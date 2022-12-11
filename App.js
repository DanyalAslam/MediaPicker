/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ImagePicker from "react-native-customized-image-picker";

ImagePickerModal = (action) =>{
  if(action == 'Gallery')
  {
    ImagePicker.openPicker({
      imageLoader: 'UNIVERSAL',
      multiple: true
    }).then(images => {
      console.log(images);
    });
  }
  else
  {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      isVideo: true
    }).then(image => {
      console.log(image);
    });
  }
}
const App = () => {

  const backgroundStyle = {
    backgroundColor:'white',
    height:'100%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems:'center',
   
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    
      <View
       style={{backgroundColor:'white',elevation:10,width:'80%',
        marginBottom:20,height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5,
        borderRadius:2,
        borderWidth:0.5
      }}
      >
        <TouchableOpacity
           onPress={() => ImagePickerModal('Gallery')}
        
        >
        <Text>Gallery</Text>
          </TouchableOpacity>



          <TouchableOpacity
             onPress={() => ImagePickerModal('Camera')}
          >
        <Text>Camera</Text>
          </TouchableOpacity>
      
       </View>
    
    </SafeAreaView>
  );
};



export default App;
