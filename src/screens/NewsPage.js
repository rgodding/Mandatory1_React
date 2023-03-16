import {StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity, Image } from 'react-native';

export default function NewsPage({ route }){
    const { title, image, credits, article } = route.params
    return (
      <ScrollView style={newsPageStyles.page}>
        <View style={newsPageStyles.titleContainer}>
          <Text style={newsPageStyles.title}>{title}</Text>
        </View>
        <View style={newsPageStyles.content}>
          <Image
            source={{uri: `${image}`,}}
            style={newsPageStyles.newsImage}
            />
          <Text style={newsPageStyles.credits}>Credit: {credits}</Text>
        </View>
        <View style={newsPageStyles.article}>
          <Text style={newsPageStyles.articleText}>{article}</Text>
        </View>
      </ScrollView>
    );
}

const newsPageStyles = StyleSheet.create({
  page: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  }, 
  titleContainer: {

  }, 
  title: {
    fontSize: 28,
    backgroundColor: 'grey',
    borderRadius: 15,
    padding: 10,
  }, 
  content: {
    marginTop: 15,
  }, 
  newsImage: {
        width: 250,
        height: 250, 
        borderRadius: 10,
  }, 
  credits: {
    fontSize: 12,
    marginTop: 5,
  }, 
  article: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
  }, 
  articleText: {
    fontSize: 16,
  }
})
