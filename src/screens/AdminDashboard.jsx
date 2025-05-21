import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import PostCard from '../components/PostCard';
import { useNavigation } from '@react-navigation/native';

export default function AdminDashboard() {
  const navigation = useNavigation();

  const posts = [
    {
      id: 1,
      titulo: 'Título da Postagem',
      descricao: 'Descrição breve do conteúdo Descrição breve do conteúdo Descrição breve do conteúdo Descrição breve do conteúdo Descrição breve do conteúdo',
    },
  ];

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require('../../assets/banner-admin.png')}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Lista de Posts</Text>
            <TouchableOpacity
              style={styles.newPostButton}
              onPress={() => navigation.navigate('PostCreate')}
            >
              <Text style={styles.newPostText}>+ Novo Post</Text>
            </TouchableOpacity>
          </View>

          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              titulo={post.titulo}
              descricao={post.descricao}
              isAdminView
            />
          ))}
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  banner: {
    width: width,
    height: width / 3, // altura proporcional para 1440x480
  },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newPostButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  newPostText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});


