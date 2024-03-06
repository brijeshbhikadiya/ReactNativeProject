import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const FunctionComponentUseEffectWithUnmount = () => {

    const [show,setShow] = useState(true);
    
  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'red',fontWeight:'600',fontSize:20,marginBottom:20,marginTop:300}}>UseEffectWithUnmount</Text>
      <TouchableOpacity onPress={()=>setShow(!show)} style={{backgroundColor:'black',paddingVertical:10,paddingHorizontal:30,borderRadius:15}}>
        <Text style={{color:'white',fontWeight:'600'}}>Hide/show Button</Text>
      </TouchableOpacity>
      {show?<Student/>:null}
    </View> 
  )
}

//Also i Apply The UseEffect With Props And State.
const Student = () =>{

    let timer=setInterval(()=>{
        console.warn("Timer Called");
    },2000)
 

    useEffect(()=>{
        return ()=>{
             clearInterval(timer)
            // console.warn("Unmount Called");
        }
    })


    return(
        <View>
            <Text style={{color:'black',fontWeight:'500',marginTop:10}}>Student</Text>
        </View>
    )
}

export default FunctionComponentUseEffectWithUnmount