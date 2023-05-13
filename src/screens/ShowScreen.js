import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as CatContext } from "../context/CatContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(CatContext);
    const id = navigation.getParam('id')
    const cat = state.find((cat) => cat.id === id);

    return(
        <View style ={styles.container} >
            <View style={styles.row} >
                <MaterialCommunityIcons name="cat" size={30} color="blue" style={styles.icon} />
                <Text style={styles.header} >Name</Text>
            </View>
            <Text style={styles.body} >{cat.name}</Text>


            <View style={styles.row} >
                <MaterialCommunityIcons name="chart-scatter-plot" size={30} color="blue"  style={styles.icon}/>
                <Text style={styles.header} >Breed</Text>
            </View>
            <Text style= {styles.body} >{cat.breed}</Text>

            <View style={styles.row} >
                <MaterialIcons name="description" size={30} color="blue" style={styles.icon}/>
                <Text style={styles.header} >Description</Text>
            </View>
            <Text style= {styles.body}>{cat.description}</Text>
    </View>
)};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        title:'Details' ,
        headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate('Edit', {id: navigation.getParam('id')})}}>
                <MaterialIcons name="edit" size={30} color="blue" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    header: {
        margin: 15,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    body: {
        marginLeft: 55,
        marginRight: 10,
        fontSize: 15,
        borderWidth: 3,
        borderColor: 'grey',
        paddingLeft: 10,
    },
    icon: {
        marginLeft: 15, marginTop: 13
    },
    row: {
        flexDirection: 'row'
    }
});

export default ShowScreen;