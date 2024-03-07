import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import FunctionComponentUseEffect from './FunctionComponentUseEffect';
import FunctionalComponentUseState from './FunctionalComponentUseState';
import ChildUseContextComponent from './ChildUseContextComponent';

const MyContext = createContext();
let name = "Brijesh Bhikadiya"

const FunctionalComponentUseContext = () => {


  return (

    <MyContext.Provider value={name}>
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <ChildUseContextComponent/>
         </View>
    </MyContext.Provider>
   
  )
}

export default FunctionalComponentUseContext
export {MyContext} 