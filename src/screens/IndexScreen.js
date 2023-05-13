import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Context as CatContext } from "../context/CatContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, deleteCat} = useContext(CatContext);

    return <View>
        <FlatList
        data={state}
        keyExtractor={ cat  => cat.id}
        renderItem={({item}) => {
            return(
                <TouchableOpacity onPress={() => {navigation.navigate('Show', {id: item.id})}} >
                    <View style={styles.list} >
                        <MaterialCommunityIcons name="cat" size={30} color="blue"/>
                        <Text style={{fontSize: 20}} >{item.name}</Text>
                        <TouchableOpacity onPress={() => {deleteCat(item.id)}} >
                            <AntDesign name="delete" size={25} color="black" />
                        </TouchableOpacity>      
                    </View>
                </TouchableOpacity>
        )}}
        />
    </View>
};

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20, 
    }
});

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        title: 'Cats',
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Add')} >
                <MaterialIcons name="add" size={30} color="black" />
            </TouchableOpacity>)
    };
};

export default IndexScreen;