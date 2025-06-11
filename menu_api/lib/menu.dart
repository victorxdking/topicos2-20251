import 'package:flutter/material.dart';

class Menu extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Menu Principal')),
      drawer: Drawer(
        child: ListView(
          children: [
            DrawerHeader(
              child: Text('Menu de APIs', style: TextStyle(color: Colors.white, fontSize: 20)),
              decoration: BoxDecoration(color: Colors.blue),
            ),
            ListTile(
              title: Text('Usuários'),
              onTap: () => Navigator.pushNamed(context, '/usuarios'),
            ),
            ListTile(
              title: Text('Universidades'),
              onTap: () => Navigator.pushNamed(context, '/universidades'),
            ),
            ListTile(
              title: Text('Livros de Fantasia'),
              onTap: () => Navigator.pushNamed(context, '/livros'),
            ),
          ],
        ),
      ),
      body: Center(child: Text('Selecione uma opção no menu')),
    );
  }
}
