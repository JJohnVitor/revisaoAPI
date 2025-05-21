import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import AdminMenu from '../components/AdminMenu';
import UserForm from '../components/UserForm';

export default function StudentCreate() {
  const handleSubmit = (data) => {
    console.log('Aluno criado:', data);
    // Aqui você poderá chamar a API futuramente
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <UserForm titulo="Adicionar Aluno" onSubmit={handleSubmit} />
        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});

