import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:menu_api/api_service.dart';

class UniversidadesPage extends StatelessWidget {
  void _abrirLink(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    } else {
      throw 'Não foi possível abrir $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Universidades')),
      body: FutureBuilder<List<dynamic>>(
        future: ApiService.fetchUniversidades(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            final universidades = snapshot.data!;
            return ListView.builder(
              itemCount: universidades.length,
              itemBuilder: (context, index) {
                final uni = universidades[index];
                return ListTile(
                  title: Text(uni['name']),
                  subtitle: Text(uni['country']),
                  trailing: IconButton(
                    icon: Icon(Icons.link),
                    onPressed: () => _abrirLink(uni['web_pages'][0]),
                  ),
                );
              },
            );
          } else if (snapshot.hasError) {
            return Center(child: Text('Erro ao carregar universidades'));
          }
          return Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
