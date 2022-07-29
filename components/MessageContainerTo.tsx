import { Text, View, StyleSheet } from "react-native";

export default function MessageContainer(props) {
    const { messageContent, key } = props;
    
    return(
        <View style={styles.cardMessage} key={key}>
            <Text>{messageContent}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardMessage: {
        width: 150,
        height: 'auto',
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: '3%',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        justifyContent: 'center',
        alignItems: 'center',
        },
    }
)