import React, {useState} from "react";
import {Text, View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(10)

    function handleNumero() {

        const novo_numero = Math.floor(Math.random() * 10)

        setNumero(novo_numero)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text>Gerar Números</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#fff',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default App;