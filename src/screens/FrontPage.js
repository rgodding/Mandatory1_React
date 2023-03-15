import { Button, Text, View } from "react-native";
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { getAuth, signInAnonymously } from "firebase/auth";
import { useState, useEffect } from "react";

// Self-Made

// Components

// Utility
import { readDB, connect } from "../utility/ReadDB";


export default function FrontPage() {
  const [newsArticles, setNewsArticles] = useState([]);
  const navigation = useNavigation();

  const button_1 = (article) => {
    navigation.navigate("News Page", article);
  };
  const button_2 = () => {
    navigation.navigate("Admin Page");
  };

  useEffect(() => {
    const authenticate = async () => {
      await connect();
      readDB(setNewsArticles);
    };
    authenticate();
  }, []);

  return (
    <ScrollView style={frontPageStyles.page}>
      <View>
        <Button
        title='admin page'
        onPress={button_2}
        />
        <Text style={frontPageStyles.title}>Welcome to the News</Text>
      </View>
      <View style={frontPageStyles.articleList}>
        {newsArticles.map((article) => (
          <View key={article.key} style={frontPageStyles.article}>
            <TouchableOpacity onPress={() => button_1(article)} style={frontPageStyles.articleButton}>
              <Text style={frontPageStyles.articlePreview}>{article.title}</Text>
              <Image
            source={{uri: `${article.image}`,}}
            style={frontPageStyles.newsImage}
            />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>
        <Text>Bottom</Text>
      </View>
    </ScrollView>
  );
}

const frontPageStyles = StyleSheet.create({
  page: {
    marginTop: 5,
    marginRight: 15,
    marginLeft: 15,
  }, 
  title: {
    fontSize: 24,
  }, 
  articleList: {

  }, 
  article: {
    backgroundColor: 'lightgrey',
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
  }, 
  articleButton: {

  }, 
  articlePreview: {
    fontSize: 24,
  }, 
  newsImage: {
    width: 150,
    height: 150,
  },
  bottom: {
    // Make it fixed maybe?

  }

});


 