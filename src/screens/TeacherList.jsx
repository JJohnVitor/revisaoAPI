import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AdminMenu from '../components/AdminMenu';

export default function TeacherList() {
  const navigation = useNavigation();

  const professores = [
    { id: 1, nome: 'Nome', email: 'e-mail@email.com' },
    { id: 2, nome: 'Nome', email: 'e-mail@email.com' },
    { id: 3, nome: 'Nome', email: 'e-mail@email.com' },
    { id: 4, nome: 'Nome', email: 'e-mail@email.com' },
    { id: 5, nome: 'Nome', email: 'e-mail@email.com' },
  ];

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.headerRow}>
          <Text style={styles.title}>Lista de Professores</Text>
          <TouchableOpacity
            style={styles.cadastrarButton}
            onPress={() => navigation.navigate('TeacherCreate')}
          >
            <Text style={styles.cadastrarText}>Cadastrar Professor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>Nome</Text>
            <Text style={styles.tableHeaderCell}>E-mail</Text>
          </View>
          {professores.map((prof) => (
            <View key={prof.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{prof.nome}</Text>
              <Text style={styles.tableCell}>{prof.email}</Text>
            </View>
          ))}
        </View>

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
  voltar: {
    alignSelf: 'flex-start',
    marginTop: 24,
    marginBottom: 16,
    marginLeft: '5%',
    color: '#000',
  },
  headerRow: {
    width: '90%',
    maxWidth: 800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cadastrarButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cadastrarText: {
    color: '#000',
  },
  table: {
    width: '90%',
    maxWidth: 800,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 12,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tableCell: {
    flex: 1,
    color: '#333',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});

