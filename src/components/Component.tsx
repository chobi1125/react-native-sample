import React, { ReactNode, useEffect } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface Props {
  color: string
  children: ReactNode
  label: string
  onPress: () => void
}

interface Data {
  id: string
  title: string
}

export default function Component({ color, children, label, onPress }: Props) {
  const data: Data[] = [
    {id: 'first', title: 'ひとつ'},
    {id: 'second', title: 'ふたつ'},
    {id: 'third', title: 'みっつ'},
  ]
  // []をつけることで初回読み込み時のみになる。
  // useEffect(()=> {
  //   Alert.alert(`Hello!!`)
  //   // return文を書くことでコンポーネント非表示時のクリーンアップ処理を発火できる
  //   return () => {
  //     Alert.alert('clean UP!!')
  //   }
  // },[])
  return(
    <>
      <ScrollView>
        <View style={styles.container}>
          <TouchableWithoutFeedback style={styles.button}>
            <Text>aaa</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.title} onPress={onPress}>{label}</Text>
          <Text style={{color}}>{children}</Text>
          {/* {data.map(item => {
            return <Text key={item.id}>{item.title}</Text>
          })} */}
          {/* data.mapのように使える。 */}
          <FlatList
            data={data}
            renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
          ></FlatList>
          <Text style={styles.block}>scroll</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 300
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
    color:"blue"
  },
  block: {
    height: 400
  }
});