import 'package:flutter/material.dart';
import 'package:menu_api/api_service.dart';

class LivrosPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Livros de Fantasia')),
      body: FutureBuilder<List<dynamic>>(
        future: ApiService.fetchLivros(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            final livros = snapshot.data as List;
            return ListView.builder(
              itemCount: livros.length,
              itemBuilder: (context, index) {
                final livro = livros[index];
                final titulo = livro['title'] ?? 'Sem título';
                final autor = (livro['authors'] != null && livro['authors'].isNotEmpty)
                    ? livro['authors'][0]['name']
                    : 'Desconhecido';
                final ano = livro['first_publish_year']?.toString() ?? 'N/A';

                return ListTile(
                  title: Text(titulo),
                  subtitle: Text('Autor: $autor\nAno: $ano'),
                );
              },
            );
          } else if (snapshot.hasError) {
            return Center(child: Text('Erro ao carregar livros'));
          }
          return Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
