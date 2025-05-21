import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculadora de Pontuação',
      home: ScoreHomePage(),
    );
  }
}

class ScoreHomePage extends StatefulWidget {
  @override
  _ScoreHomePageState createState() => _ScoreHomePageState();
}

class _ScoreHomePageState extends State<ScoreHomePage> {
  int score = 0;
  String playerName = '';
  final TextEditingController _controller = TextEditingController();

  void _updateName(String newName) {
    setState(() {
      playerName = newName;
      score = 0; // Reinicia a pontuação sempre que o nome muda
    });
  }

  void _addPoint() {
    setState(() {
      score++;
    });
  }

  void _removePoint() {
    setState(() {
      if (score > 0) {
        score--;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Calculadora de Pontuação')),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: 'Digite o nome do jogador'),
              onChanged: _updateName,
            ),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: _addPoint,
                  child: Text('Adicionar ponto'),
                ),
                SizedBox(width: 10),
                ElevatedButton(
                  onPressed: _removePoint,
                  child: Text('Remover ponto'),
                ),
              ],
            ),
            SizedBox(height: 30),
            Text(
              playerName.isEmpty
                  ? 'Digite um nome para começar'
                  : '$playerName, sua pontuação atual é $score ponto${score == 1 ? '' : 's'}.',
              style: TextStyle(fontSize: 18),
            ),
            if (score == 0 && playerName.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: Text(
                  'A pontuação não pode ser menor que zero.',
                  style: TextStyle(color: Colors.red),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
