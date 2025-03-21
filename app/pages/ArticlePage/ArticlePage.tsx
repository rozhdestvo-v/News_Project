import React, { FC } from "react";
import { IArticle } from "../../api/types";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface IArticlePageProps {
  article: IArticle,
  theme: boolean,
  setArticle: (value: null) => void
}

export const ArticlePage: FC<IArticlePageProps> = ({article, theme, setArticle}) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme ? '#252525' : '#ECECEC',
    },
    image: {
      height: 300,
      width: '100%',
      borderRadius: 12,
      marginBottom: 20,
    },
    text: {
      color: theme ? '#fff' : '#000',
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 20,
      textAlign: 'center'
    },
    description: {
      color: theme ? '#fff' : '#000',
      fontSize: 20,
      marginBottom: 20,
    }
  })


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text} >{article.title}</Text>
      <Image style={styles.image} src={article.urlToImage} />
      <Text style={styles.description} >{article.description}</Text>
      <Text style={styles.description} >{`Source: ${article.source.name}`}</Text>
      <View style={{width: '100%'}}><Button title="Go back" onPress={() => setArticle(null)}/></View>
    </ScrollView>
  )
}