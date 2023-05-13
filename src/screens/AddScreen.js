import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import CatForm from "../components/CatForm";
import { Context as CatContext } from "../context/CatContext";

const AddScreen = ({navigation}) => {
    const {addCat} = useContext(CatContext);

    return <View>
        <CatForm
        buttonTitle="Add"
        onSubmit={(name, breed, description) => {
            addCat(name, breed, description, () => navigation.navigate('Index'))
        }}/>
    </View>
};

const styles = StyleSheet.create({});

export default AddScreen;