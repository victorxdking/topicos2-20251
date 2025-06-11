import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static Future<List<dynamic>> fetchUsuarios() async {
    try {
      final url = Uri.parse('https://reqres.in/api/users?page=1');
      print('Requisição para: $url');

      final response = await http.get(url);

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        return data['data'];
      } else {
        throw Exception('Erro na API: ${response.statusCode} ${response.reasonPhrase}');
      }
    } catch (e) {
      print('Erro em fetchUsuarios(): $e');
      rethrow;
    }
  }

  static Future<List<dynamic>> fetchUniversidades() async {
    try {
      final url = Uri.parse('http://universities.hipolabs.com/search?country=Brazil');
      print('Requisição para: $url');

      final response = await http.get(url);

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        throw Exception('Erro na API: ${response.statusCode} ${response.reasonPhrase}');
      }
    } catch (e) {
      print('Erro em fetchUniversidades(): $e');
      rethrow;
    }
  }

  static Future<List<dynamic>> fetchLivros() async {
    try {
      final url = Uri.parse('https://openlibrary.org/subjects/fantasy.json?limit=10');
      print('Requisição para: $url');

      final response = await http.get(url);

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        return data['works'];
      } else {
        throw Exception('Erro na API: ${response.statusCode} ${response.reasonPhrase}');
      }
    } catch (e) {
      print('Erro em fetchLivros(): $e');
      rethrow;
    }
  }
}
