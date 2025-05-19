import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Contador',
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int contador = 0;
  String nome = '';
  final TextEditingController _controller = TextEditingController();

  void incrementar() {
    setState(() {
      nome = _controller.text;
      contador++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Contador com nome')),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: 'Digite seu nome'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: incrementar,
              child: Text('Clique aqui'),
            ),
            SizedBox(height: 20),
            Text(
              nome.isEmpty
                  ? 'Nenhum clique registrado ainda'
                  : '$nome, você clicou $contador vezes',
              style: TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}
