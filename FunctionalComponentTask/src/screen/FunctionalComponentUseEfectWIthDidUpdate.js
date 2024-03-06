import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const FunctionalComponentUseEfectWIthDidUpdate = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn('Data Updated Count', {count});
  }, [count]);

  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    console.warn('Data Updated Data', {data});
  }, [data]);

  useEffect(() => {
    setData(0);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: 'red',
          fontWeight: '600',
          fontSize: 20,
          marginBottom: 20,
        }}>
        UseEffectWIthDidUpdate
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              marginTop: 10,
              marginLeft: 80,
            }}>
            {count}
          </Text>
          <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={{
              backgroundColor: 'black',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Updated Counter
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              marginTop: 10,
              marginLeft: 65,
            }}>
            {data}
          </Text>
          <TouchableOpacity
            onPress={() => setData(data + 1)}
            style={{
              backgroundColor: 'black',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Updated Data
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FunctionalComponentUseEfectWIthDidUpdate;
