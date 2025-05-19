import 'package:flutter/material.dart';
void main(){
    runApp(MyApp());
}
// MyApp é um widget sem estado
class MyApp extends StatelessWidget {
    // método build vai anular o método build do api
    // método retorna um widget
    @override
    Widget build(BuildContext context){
        // é uma base de apps com Material Design no Flutter
        // Scaffold fornece uma estrutura básica: AppBar,
        // corpo (body), rodapé, etc
        return MaterialApp(
            title: 'Hello World',
            home: Scaffold(
                appBar: AppBar(
                    title: Text('Meu Primeiro App Flutter')
                ),
                body: Center(
                    child: Text(
                        'Hello, World', style: TextStyle(
                            fontSize: 28
                        )
                    )
                )
            )
        );
    }
}