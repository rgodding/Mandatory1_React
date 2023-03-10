import {StyleSheet, Image, Text, View, Linking } from "react-native";

export default function NewsPage({ route }){
    const { title, image, credits, article } = route.params
    return (
      <View>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <Image
            source={{uri: `${image}`,}}
            style={styles.newsImage}
            />
          <Text>{credits}</Text>
        </View>
        <View>
          <Text>{article}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    newsImage: {
        width: 250,
        height: 250,
    }
})