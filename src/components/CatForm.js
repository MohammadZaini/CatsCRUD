import React, { useState } from "react";
import { StyleSheet, Button } from "react-native";
import { Input} from "react-native-elements";

const CatForm = ({onSubmit, buttonTitle, initialValues}) => {
    const [name, setName] = useState(initialValues.name);
    const [breed, setBreed] = useState(initialValues.breed);
    const [description, setDescription] = useState(initialValues.description);

    return (         
            <>
                <Input
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <Input
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder="Breed"
                    value={breed}
                    onChangeText={setBreed}
        
                />
                <Input
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
        
                />
                <Button 
                title={buttonTitle}
                onPress={() => onSubmit(name, breed, description)}
                />
            </>
)};

CatForm.defaultProps = {
    initialValues: {
        name: '',
        breed: '',
        description: '',
    }
};

const styles = StyleSheet.create({});

export default CatForm;