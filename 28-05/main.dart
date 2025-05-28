import 'package:flutter/material.dart';
void main(){
  runApp(MaterialApp(
    title: 'Navegação entre Telas',
    home: TelaInicial(),
  ));
}
class TelaInicial extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(title: Text('Tela Inicial')),
      body: Center(
        child: ElevatedButton(
          child: Text('Ir para a Tela 2'),
          onPressed: () {
            Navigator.push(
              context, MaterialPageRoute(builder: (context) => TelaDois()),
            );
          },
        ),
      ),
    );
  }
}
class TelaDois extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(title: Text('Tela 2')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Você está na segunda tela', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              child: Text('Voltar para a tela inicial'),
              onPressed: () {
                Navigator.pop(context); // volta a tela inicial
              },
            ),
            SizedBox(height: 20),
            ElevatedButton(
              child: Text('Ir para a Tela 3'),
              onPressed: () {
                Navigator.push(
                  context, MaterialPageRoute(builder: (context) => TelaTres()),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
// Tela 3
class TelaTres extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(title: Text('Tela 3')),
      body: Center(
        child: ElevatedButton(
          child: Text('Voltar para a tela Inicial '),
          onPressed: () {
            Navigator.popUntil(context, (route) => route.isFirst);
          },
        ),
      ),
    );
  }
}