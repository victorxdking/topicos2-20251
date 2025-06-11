import 'package:flutter/material.dart';
import 'package:menu_api/api_service.dart';

class UsuariosPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Usuários')),
      body: FutureBuilder<List<dynamic>>(
        future: ApiService.fetchUsuarios(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            final usuarios = snapshot.data!;
            return ListView.builder(
              itemCount: usuarios.length,
              itemBuilder: (context, index) {
                final usuario = usuarios[index];
                return ListTile(
                  leading: CircleAvatar(backgroundImage: NetworkImage(usuario['avatar'])),
                  title: Text('${usuario['first_name']} ${usuario['last_name']}'),
                  subtitle: Text(usuario['email']),
                );
              },
            );
          } else if (snapshot.hasError) {
            return Center(child: Text('Erro ao carregar usuários'));
          }
          return Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
