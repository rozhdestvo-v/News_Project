import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { useNews } from './app/api/useNews';
import { useState } from 'react';
import { NewsCell } from './app/components/NewsCell';
import { LoginPage } from './app/pages/LoginPage';
import { IArticle } from './app/api/types';
import { ArticlePage } from './app/pages/ArticlePage';
import { MainPage } from './app/pages/MainPage';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  }
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [theme, setTheme] = useState(false)
  const [articlePicked, setArticle] = useState<IArticle | null>(null)

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme ? '#252525' : '#ECECEC',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 80
    },
    headline: {
      fontSize: 24,
      fontWeight: '800',
      color: theme ? '#fff' : '#000'
    },
    textInput: {
      marginTop: 20,
      backgroundColor: theme ? '#919191' : '#cfcfcf',
      height: 40,
      width: '100%',
      borderRadius: 12,
      paddingLeft: 12,
    },
  });

  if (isLoggedIn === false) {
    return (
      <View style={dynamicStyles.container}><LoginPage setIsLoggedIn={setIsLoggedIn}/></View>
    )
  }

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.header}>
        <Text style={dynamicStyles.headline}>News</Text>
        <Switch value={theme} onChange={() => setTheme(!theme)} />
      </View>
      {articlePicked ? 
      <ArticlePage article={articlePicked} theme={theme} setArticle={setArticle} /> : 
      <MainPage dynamicStyles={dynamicStyles} setArticle={setArticle} />}
      <StatusBar style="auto" />
    </View>
  );
}


