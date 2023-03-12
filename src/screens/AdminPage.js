import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

// Testing, different app or this will be made on a computer
// If made on same app, make login to access editing the database and reach the page

export default function AdminPage(){
    const [title, setTitle] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [credits, setCredits] = useState([]);
    const [article, setArticle] = useState([]);

    const button_1 = () => {
        console.log('testing')
        console.log('Title: (' + title + ')')
        console.log('Image URL: (' + imageUrl + ')')
        console.log('Credits: (' + credits + ')')
        console.log('Article: (' + article + ')')
    }

    const saveNewArticle = () => {
        console.log('saving article')
    }
    return (
        <View>
            <View style={adminPageStyles.inputContainer}>
                <Button
                title='test'
                onPress={button_1}/>
                <Text>Admin Page</Text>

                <TextInput
                style={adminPageStyles.inputTitle}
                placeholder="Title"
                onChangeText={setTitle}
                />

                <TextInput
                style={adminPageStyles.inputImageUrl}
                placeholder="image url"
                onChangeText={setImageUrl}
                />

                <TextInput
                style={adminPageStyles.inputCredits}
                placeholder="credits"
                onChangeText={setCredits}
                />

                <TextInput
                style={adminPageStyles.inputArticle}
                placeholder="article"
                onChangeText={setArticle}
                />

                <Button
                title='Save Article'
                onPress={saveNewArticle}
                />
            </View>
        </View>
    )
}

const adminPageStyles = StyleSheet.create({
    page: {

    },
    inputContainer: {
        margin: 15,
    },
    inputTitle: {
        
    },
    inputImageUrl: {

    },
    inputCredits: {

    },
    inputArticle: {

    }
})