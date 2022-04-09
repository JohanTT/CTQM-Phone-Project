import React from 'react';
// Use state
import { useState } from 'react';
// Use effect
import { useEffect } from 'react';
// Use layoutEffect
import { useLayoutEffect } from 'react';
// Use Ref
import { useRef } from 'react';
import {Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import styles from './styles';

const tabs = ['posts', 'comments', 'albums']

const App = () => {
  // ----------USE_STATE----------
  const [teamInfo, setTeaminfo] = useState({
    name: 'CTQM',
    members: '4',
  })
  // bên trong useState là giá trị khởi tạo
  // return cho state
  // setState dùng để cập nhật giá trị của state

  const infoUpdate = () => {
    setTeaminfo({
      ...teamInfo,
      topic: 'React hook',
    })
  }

  // ----------USE_EFFECT----------
  const [inputTitle, setinputTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  // const [isStart, setIsStart] = useState(false)

  useEffect(() => {
    setinputTitle(inputTitle);
    // Các thao tác thay đổi còn được gọi là side effect
    // Nếu đặt ở bên ngoài thì có nghĩa nó sẽ được thực thi trước
    // Khi bỏ vào trong sẽ được chạy sau cùng
    // Cùng lúc đó nó sẽ ưu tiên chạy giao diện người dùng
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then (res => res.json())
    .then (posts => {
      setPosts(posts);
      // console.log(posts);
    })
  }, [])

  useEffect(() => {
    console.log(`type changed ${type}`);
  }, [type])

  //  ----------USE_LAYOUTEFFECT----------
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (count > 3)
      setCount(0)
  }, [count])

  const startCount = () => {
    setCount(count + 1)
  }
  
  // ----------USE_REF----------
  const [countDown, setCountDown] = useState(60)
  const timerId = useRef()
  const prevCountDown = useRef()

  useEffect(() => {
    prevCountDown.current = countDown
  }, [countDown])

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCountDown(prevCountDown => prevCountDown - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current) 
  }
  // console.log(countDown, prevCountDown.current);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>React Hooks by CTQM</Text>
      </View>
      <ScrollView>
          {/* -----Use_State----- */}
        <View>
          <Text style={styles.hooksTitle}>useState</Text>
          <Text style={styles.text}>{JSON.stringify(teamInfo)}</Text>
          <TouchableOpacity style={styles.btn} onPress={infoUpdate}>
            <Text style={styles.btnTitle}>Update Topic</Text>
          </TouchableOpacity>
        </View>
        {/* -----Use-Effect----- */}
        <View>
          <Text style={styles.hooksTitle}>useEffect</Text>
          <Text style={styles.text}>{inputTitle}</Text>
          <TextInput 
            style={styles.input}
            onChangeText={inputTitle => setinputTitle(inputTitle)}
            placeholder="Input Title"
          />
          <View>
            {posts.map(posts => (
              <Text style={styles.smallText} key={posts.id}> 
              {posts.title}
              </Text>
            ))}
          </View>
          <View style={{ flex: 1, flexDirection: 'row'}}>
            {tabs.map(tab => (
            <TouchableOpacity
              style={styles.smallBtn}
              onPress={() => setType(tab)}>
              <Text style={{ padding: 5}}>
                {tab}
              </Text>
            </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* -----Use-LayoutEffect----- */}
        <View>
        <Text style={styles.hooksTitle}>useLayoutEffect</Text>
          <Text style={styles.text}>{count}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={startCount}
          >
            <Text style={styles.btnTitle}>Count</Text>
          </TouchableOpacity>
        </View>
        {/* ------Use-Ref----- */}
        <View>
          <Text style={styles.hooksTitle}>useRef</Text>
          <Text style={styles.text}>{countDown}</Text>
          <TouchableOpacity 
          style={styles.btn}
          onPress={handleStart}>
            <Text style={styles.btnTitle}>
              CountDown
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.btn}
          onPress={handleStop}>
            <Text style={styles.btnTitle}>
              Stop
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;