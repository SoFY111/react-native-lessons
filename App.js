import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


const Header = ({data, setData}) => {

    const add = () => {
        setData([...data, ''])
    }

    const reset = () => {
        setData([''])
    }

    return (
        <View style={styles.header}>
            <Button title="Ekle" onPress={add}/>
            <Button title="Reset" onPress={reset}/>
        </View>
    )
}

const Hey = ({id}) => {
    return (
        <View style={styles.hey}>
            <Text>Alan {id + 1}</Text>
        </View>
    )
}

export default function App() {

    const [data, setData] = useState([''])

    return (
        <SafeAreaView>
            <ScrollView onContentSizeChange={() => console.log('içerik değişti')}
                        onMomentumScrollBegin={() => console.log('başladı')} stickyHeaderIndices={[0]}
                        onMomentumScrollEnd={() => console.log('bitti')}
                        maximumZoomScale={3} indicatorStyle={"default"} decelerationRate={"fast"}
                        snapToInterval={2} snapToAlignment={'center'}
                        scrollIndicatorInsets={{
                            top: 100
                        }}
            >
                <Header {...{data, setData}}/>
                {data.map((d, i) => (
                    <Hey id={i}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#fff',
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    hey: {
        backgroundColor: 'lime',
        padding: 20,
        width: 500,
        marginBottom: 10
    }
});
