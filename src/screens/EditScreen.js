import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import CatForm from "../components/CatForm";
import { Context as CatContext } from "../context/CatContext";

const EditScreen = ({navigation}) => {
    const {state, editCat } = useContext(CatContext);
    const id = navigation.getParam('id');
    const cat = state.find((cat) => cat.id === id);

    return <View>
        <CatForm
        buttonTitle="Confirm"
        initialValues={{name: cat.name, breed: cat.breed, description: cat.description}}
        onSubmit={(name, breed, description) => {
            editCat( id ,name, breed, description, () => navigation.pop())
        }}
        />
    </View>
};

const styles = StyleSheet.create({});

export default EditScreen;