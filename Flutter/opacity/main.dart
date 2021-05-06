import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.purple,
      ),
      home: MyHomePage(title: 'Opacity'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  double opacityLevel = 0.0;

  void _changeOpacity() {
    setState(() => opacityLevel = opacityLevel == 0 ? 1.0 : 0.0);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(

          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
           Column(
             children: [
               // 기본 컨테이너
               Container(
                 margin: const EdgeInsets.all(10.0),
                 color: Colors.green,
                 width: 150.0,
                 height: 150,
               ),

               // 일반적으로 투명도를 넣는 법
               Opacity(opacity: 0.5,
                 child:
                 Container(
                   margin: const EdgeInsets.all(10.0),
                   color: Colors.blue,
                   width: 150.0,
                   height: 150.0,
                 ),
               ),

               // 투명도로 색깔 블렌드하는 법
               Stack(
                 children: [
                   Container(
                     margin: const EdgeInsets.all(10.0),
                     color: Colors.orange,
                     width: 150.0,
                     height: 150.0,
                   ),
                   Opacity(
                     opacity: 0.5,
                     child: Container(
                       margin: const EdgeInsets.all(10.0),
                       color: Colors.black,
                       width: 150.0,
                       height: 150.0,
                     ),
                   ),
                 ],
               ),

               // 이미지 블렌딩
               Stack(
                 children: [
                   Image.asset('images/dog1.png', width: 150, height: 150),
                   Opacity(
                     opacity: 0.5,
                     child: Container(
                       margin: const EdgeInsets.all(10.0),
                       color: Colors.green,
                       width: 150.0,
                       height: 150.0,
                     ),
                   )
                 ],
               ),

             //  투명도에 애니메이션 주는 법
               Stack(
                 children: [
                   Container(
                     margin: const EdgeInsets.all(10.0),
                     color: Colors.orange,
                     width: 150.0,
                     height: 150.0,
                   ),
                   AnimatedOpacity(
                       opacity: opacityLevel,
                       duration: Duration(seconds: 2),
                       child: Container(
                        margin: const EdgeInsets.all(10.0),
                        color: Colors.green,
                        width: 150.0,
                        height: 150.0,
                     ),
                   ),
                   ElevatedButton(onPressed: _changeOpacity, child: Text('change'))
                 ],
               ),
             ],
           )
          ],
        ),
      ),
    );
  }
}
