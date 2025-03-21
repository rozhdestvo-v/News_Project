import React, { FC, useState } from "react"
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { NewsCell } from "../../components/NewsCell"
import { useNews } from "../../api/useNews"
import { IArticle } from "../../api/types"

interface IMainPage {
  setArticle: (value: IArticle) => void,
  dynamicStyles: {textInput: {}}
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    marginTop: 20,
    borderRadius: 12
  },
  loader: {
    width: '100%',
    height: '50%'
  },
  errorText: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '800',
    color: '#7B1113',
    textAlign: 'center'
  },
  errorView: {
    width: '100%'
  }
});

export const MainPage: FC<IMainPage> = ({setArticle, dynamicStyles}) => {
  const {data, error, isLoading, refetch} = useNews()

  const [searchText, onTextChange] = useState('')
  
  return (
    <>
      <TextInput style={dynamicStyles.textInput} onChangeText={onTextChange} value={searchText} placeholder='Search news' />
        {isLoading ? <ActivityIndicator style={styles.loader} size='large' /> : null}
        {error && !isLoading ?
        <View style={styles.errorView}>
          <Text style={styles.errorText}>Произошла ошибка сети, повторите запрос позднее</Text>
          <Button title='Повторить запрос' onPress={refetch}/>
        </View> : null}
        <ScrollView style={styles.scrollView}>
          {data && !isLoading && !error ? 
            data.articles.map((article) => {
            if (searchText) {
              if (article.title.toLowerCase().includes(searchText.toLowerCase())) {
                return <NewsCell key={article.url} article={article} setArticle={setArticle} />
              } else {
                return null
              }
            }
            return <NewsCell key={article.url} article={article} setArticle={setArticle} />}) : null}
        </ScrollView>
    </>
  )
}