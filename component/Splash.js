import React from 'react'



export default function Splash(){
    return(<View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <LottieView source={require('../assets/splash-animation.json')}
        autoPlay loop='false' />
    </View>)
}