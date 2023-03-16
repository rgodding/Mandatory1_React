import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert } from "react-native";

// Utility
import { readDB } from "../utility/ReadDB";
import { SaveArticle, DeleteArticle } from "../utility/ArticleManager";


// Testing, different app or this will be made on a computer
// If made on same app, make login to access editing the database and reach the page

export default function AdminPage(){
    const [title, setTitle] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [credits, setCredits] = useState([]);
    const [article, setArticle] = useState([]);
    const [newsArticles, setNewsArticles] = useState([]);


    const button_1 = () => {
        console.log('testing')
        console.log('Title: (' + title + ')')
        console.log('Image URL: (' + imageUrl + ')')
        console.log('Credits: (' + credits + ')')
        console.log('Article: (' + article + ')')
    }

    const button_2 = (article) => {
      console.log('deleting key: ' + article.key)
      Alert.alert(
        'Delete Article',
        `Are you sure you want to delete this article? ${article.title}`,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Delete', onPress: () => DeleteArticle(article.key)},
        ]
      )
    }

    const saveNewArticle = () => {
        SaveArticle(title, imageUrl, credits, article);
    }

    useEffect(() => {
        readDB(setNewsArticles)
    }, []);

    return (
      <ScrollView style={adminPageStyles.page}>
        <View style={adminPageStyles.inputContainer}>
          <Text style={adminPageStyles.pageTitle}>Create Article</Text>

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
            multiline={true}
          />
          <View style={adminPageStyles.saveButton}>
            <Button
              title="Save Article"
              onPress={saveNewArticle}
              color="grey"
            />
          </View>
        </View>

        <View>
          <Text style={adminPageStyles.editArticleTitle}>Edit Article:</Text>
          <View style={adminPageStyles.editArticleList}>
            {newsArticles.map((article) => (
              <View key={article.key} style={adminPageStyles.editArticle}>
                <Text>{article.title}</Text>
                <TouchableOpacity
                  style={adminPageStyles.deleteArticle}
                  onPress={() => button_2(article)}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
}

const adminPageStyles = StyleSheet.create({
    page: {
      margin: 15
    },
    pageTitle: {
      fontSize: 24,
      backgroundColor: 'lightgrey',
      padding: 10,
      borderRadius: 15,
      textAlign: 'center'
    },
    inputContainer: {
    },
    inputTitle: {
        padding: 5,
        borderBottomWidth: 0.5,
    },
    inputImageUrl: {
        padding: 5,
        borderBottomWidth: 0.5,
    },
    inputCredits: {
        padding: 5,
        borderBottomWidth: 0.5,
    },
    inputArticle: {
        padding: 5,
        borderBottomWidth: 0.5,
    },
    saveButton: {
      marginTop: 10,
    },
    editArticleTitle: {
      fontSize: 24,
      backgroundColor: 'lightgrey',
      padding: 10,
      borderRadius: 15,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 15,
    },
    editArticleList: {

    },
    editArticle: {
      backgroundColor: 'lightgrey',
      marginTop: 10,
      padding: 10,
      borderRadius: 15,
    },
    deleteArticle: {
      backgroundColor: 'grey',
      padding: 5,
      width: 50,
      borderRadius: 15,
      marginTop: 5,
    }
})