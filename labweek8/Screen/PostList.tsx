import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { getPosts } from "../services/axios";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PostList({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const stored = localStorage.getItem("posts");
      if (stored) {
        setPosts(JSON.parse(stored));
      }
  
      const res = await getPosts();
      if (res.status === 200) {
        const freshPosts = res.data;

        const updatedStored = localStorage.getItem("posts");
        if (updatedStored) {
          const updatedPosts = JSON.parse(updatedStored);
          setPosts(updatedPosts);
        } else {
          setPosts(freshPosts);
          localStorage.setItem("posts", JSON.stringify(freshPosts));
        }
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          style={styles.card}
          onPress={() => {
            navigation.navigate("Forms", {
              post,
              updatePostList: setPosts,
              setIsUpdated,
            });
          }}
        >
          <Text style={styles.title}>{post.title}</Text>
          <Text>{post.body}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});
