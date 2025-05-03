import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { updatePost } from "../services/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Forms(props) {
  const { post, updatePostList, setIsUpdated } = props.route.params;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = () => {
    updatePost(post.id, { title, body }).then((response) => {
      if (response.status === 200 || response.status === 204) {
        const updatedPost = { ...post, title, body };
  
        updatePostList((prevPosts) =>
          prevPosts.map((p) => (p.id === post.id ? updatedPost : p))
        );

        const storedPosts = localStorage.getItem("posts");
        let posts = storedPosts ? JSON.parse(storedPosts) : [];
        posts = posts.map((p) => (p.id === post.id ? updatedPost : p));
        localStorage.setItem("posts", JSON.stringify(posts));
  
        setIsUpdated(true);
        props.navigation.goBack();
      }
    });
  };
  
  

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        multiline
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        style={styles.input}
        multiline
      />
      <Button title="UPDATE POST" onPress={handleUpdate} />
      <Button title="GO BACK" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
});
