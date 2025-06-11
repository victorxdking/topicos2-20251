import 'package:flutter/material.dart';
import 'package:menu_api/menu.dart';
import 'package:menu_api/usuarios.dart';
import 'package:menu_api/universidades.dart';
import 'package:menu_api/livros.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'Menu com APIs',
    home: Menu(),
    routes: {
      '/usuarios': (context) => UsuariosPage(),
      '/universidades': (context) => UniversidadesPage(),
      '/livros': (context) => LivrosPage(),
    },
  ));
}
