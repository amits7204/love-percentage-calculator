import React, {useEffect, useState} from 'react'
import {View, Animated, Easing, Text, StyleSheet, ActivityIndicator} from 'react-native'
import { TextInput, Appbar, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native'
import {useDispatch, useSelector} from 'react-redux'

export default  DisplayLove =({route}) =>{
    // console.log("props: ", route.params)
    // const {fname, sname} = route.params
    // const [result, setResult] = useState({})
    
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state.reducer)
    
    useEffect(()=>{
        console.log("SELECTOR display: ",selector)
    },[selector])
    return(
        <View style={styles.container}>
            {selector.isLoading?<ActivityIndicator size="large" style={styles.activity} color="#000000"/>:<View><View style={{margin: 50}}> 
                <Text style={{fontSize: 28, fontWeight: 'bold'}}>{selector.responseLPC.fname}</Text>
                <Button icon={{source: 'heart', direction: 'ltr'}}/>
                <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 50}}>{selector.responseLPC.sname}</Text>
            </View > 
            <View style={{alignItems: 'center', marginTop: 100}}>
                <Text style={{fontSize: 34, fontWeight: 'bold', textAlign: 'center'}}>{selector.responseLPC.percentage}%</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold', width: 100, textAlign: 'center'}}>{selector.responseLPC.result}</Text>
            </View></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }, 
    activity: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
