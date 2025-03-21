import React, { FC } from "react"
import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { IArticle } from "../../api/types"

interface NewsCellProps {
  article: IArticle,
  setArticle: (value: IArticle) => void
}

export const NewsCell: FC<NewsCellProps> = ({article, setArticle}) => {
  return (
    <View style={styles.newsCell}>
      <Image style={styles.image} src={article.urlToImage} />
      <Text onPress={() => setArticle(article)} style={styles.text}>{article.title}</Text>
    </View>
  )
}