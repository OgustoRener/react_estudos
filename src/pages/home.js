import React from 'react'
import { View, StyleSheet } from 'react-native'

import Contador from '../componentes/Contador'
// import Botao from '../componentes/Botao'
// import Titulo from '../componentes/Titulo'
// import Aleatorio from '../componentes/Aleatorio'
// import MinMax from '../componentes/MinMax'
// import Multi, { Componente1, Componente2 } from '../componentes/Multi'
// import Primeiro from '../componentes/Primeiro'


export default () => (
    <View style={style.Butao}>
        <Contador inicial={100} passo={24} />
        <Contador />
        {/* <Titulo principal="Cadastro Produto"
        <Botao />
            secundario="Tela de Cdastro do Produto"/>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={14}/>
         <Multi />
        <Componente1 />
        <Componente2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    Butao: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        textAlign: 'center',

    }
})
