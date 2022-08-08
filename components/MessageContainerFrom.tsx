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
        backgroundColor: '#42f5d1',
        padding: 10,
        marginLeft: '57%',
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
        shadowOpacity: 0.26,
        shadowRadius: 6.28,
        elevation: 11,
        justifyContent: 'center',
        alignItems: 'center',
        },
    }
)