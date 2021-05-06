import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: AnimatedContainerDemo(),
      ),
    );
  }
}

class AnimatedContainerDemo extends StatefulWidget {
  @override
  _AnimatedContainerDemoState createState() => _AnimatedContainerDemoState();
}

class _AnimatedContainerDemoState extends State<AnimatedContainerDemo> {

  final _myDuration = Duration(seconds: 1);

  // color, Gradient var
  var _myValue = Colors.green;
  final _myNewValue = Colors.blue;

  // Border, Border radius, Shadow, Shape var
  // var _myValue = 0.0;
  // final _myNewValue = 100.0;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Center(
          child:
          // Color
          AnimatedContainer(
            color: _myValue,
            duration: _myDuration,
            child: SomeOtherWidget(),
          ),

          // Border
          // AnimatedContainer(
          //   duration: _myDuration,
          //   decoration: BoxDecoration(
          //     color: Colors.blue,
          //     border: Border.all(
          //       color: Colors.greenAccent,
          //       width: _myValue,
          //     ),
          //   ),
          //   child: SomeOtherWidget(),
          // ),

          // Border radius
          // AnimatedContainer(
          //   duration: _myDuration,
          //   decoration: BoxDecoration(
          //     color: Color(0xFF0099EE),
          //     borderRadius: BorderRadius.circular(_myValue),
          //     border: Border.all(
          //       color: Color(0xFF12569A),
          //       width: 10.0,
          //     ),
          //   ),
          //   child: SomeOtherWidget(),
          // ),

          // Shadow
          // AnimatedContainer(
          //   duration: _myDuration,
          //   decoration: BoxDecoration(
          //     color: Colors.blue,
          //     boxShadow: [
          //       BoxShadow(
          //         color: Colors.black,
          //         offset: Offset(_myValue, _myValue),
          //         blurRadius: _myValue,
          //         spreadRadius: _myValue,
          //       )
          //     ],
          //   ),
          //   child: SomeOtherWidget(),
          // ),

          // Gradient
          // AnimatedContainer(
          //   duration: _myDuration,
          //   decoration: BoxDecoration(
          //     gradient: LinearGradient(
          //         colors: [
          //           _myValue,
          //           Colors.black.withBlue(_myValue.red),
          //         ]
          //     ),
          //   ),
          //   child: SomeOtherWidget(),
          // ),

          // Shape
          // AnimatedContainer(
          //   duration: _myDuration,
          //   color: Colors.blue,
          //   width: 200 + _myValue,
          //   height: 200 - _myValue,
          //   child: SomeOtherWidget(),
          // ),

        ),
        updateStateButton()
      ],
    );
  }

  Align updateStateButton() {
    return Align(
      alignment: Alignment.bottomCenter,
      child: Padding(
        padding: EdgeInsets.only(bottom: 100),
        child: RaisedButton(
          child: Text('Update State'),
          onPressed: () {
            setState(() {
              _myValue = _myNewValue;
            });
          },
        ),
      ),
    );
  }
}

class SomeOtherWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: 200,
    );
  }
}
