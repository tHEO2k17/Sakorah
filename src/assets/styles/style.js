import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23232B'
    },
    contentStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    formStyle:{
        marginTop: 40,
        paddingRight: 40,
        paddingLeft: 30
    },
    title: {
        color: '#FFF',
        marginTop: 15,
        width: 140,
        textAlign: 'center',
        opacity: 0.8
    },
    input: {
        backgroundColor: 'rgba(0,0,0, 0.2)',
        borderColor: '#555',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 10
    },
    infoText:{
        marginTop: 10,
        alignItems: 'center',
        opacity: 0.8,
    },
    link: {
        color: '#F7B432'
    },
    extraText:{
        color: '#FFF'
    }
})