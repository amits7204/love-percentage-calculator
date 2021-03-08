import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux'
import {lpcGEtRequest} from '../redux/ActionCreator'
export default function Home({navigation}){
    const [fname, setText]=useState('')
    const [sname, setSname]=useState('')

    const dispatch = useDispatch()
    const selector = useSelector((state)=>state.reducer)

    // useEffect(()=>{
    //     console.log("SELECTOR EFFECT: ", selector)
    // },[selector])

    const handleOnChange = (e) =>{
        setText(e)
    }
    const handleOnSecondeInput = (e) =>{
        setSname(e)
    }

    const handleOnSubmit = ()=>{
        dispatch(lpcGEtRequest({fname: fname, sname: sname}))
        navigation.navigate('DisplayLove')
    }
    return(
        <View style={styles.container}>
            <TextInput style={{marginBottom: 20, borderColor: "#8D021F"}} mode= 'outlined' label="Male" onChangeText={(e)=>handleOnChange(e)}/>
            <TextInput mode= 'outlined' label="Female" onChangeText={(e)=> handleOnSecondeInput(e)}/>
            <Button uppercase="false"  icon="cards-heart" mode="contained"
            onPress={()=>handleOnSubmit()}
            style={{margin: 20, height: 45, justifyContent: 'center', backgroundColor: "#8D021F"}}>
                Calculate
            </Button>
            {/* <StatusBar style="auto" /> */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        marginStart: 20,
        marginEnd: 20
    }
})