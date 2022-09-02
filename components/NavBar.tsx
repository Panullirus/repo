// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

// // @ts-ignore
// export default function NavBar(navigation) {
//     return(
//         <View style={styles.container}>
//             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Image source={require('../assets/images/logo.png')} style={styles.logo} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Image source={require('../assets/images/home.png')} style={styles.icon} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Image source={require('../assets/images/search.png')} style={styles.icon} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Image source={require('../assets/images/cart.png')} style={styles.icon} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Image source={require('../assets/images/user.png')} style={styles.icon} />
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//         backgroundColor: '#fff',
//         borderBottomWidth: 1,
//         borderBottomColor: '#dbdbdb',
//     },
//     icon: {
//         width: 30,
//         height: 30,
//     },
//     logo: {
//         width: '100%',
//         height: '100%',
//     },
// })