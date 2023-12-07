import 'package:flutter/material.dart';
import 'package:test22521/Boxes/textboxs/button.dart';
import 'package:test22521/Boxes/textboxs/sqtile.dart';
import 'package:test22521/Boxes/textboxs/textboxes.dart';

class LoginPage extends StatelessWidget {
  LoginPage({Key? key}) : super(key: key);

  //controllers
  final usernameController = TextEditingController();
  final passwordController = TextEditingController();

  // sign user
  void SignUser () {}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[300],
      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [

              // Add SizedBox to move the logo down
              SizedBox(height: 30), // Adjust the height as needed

            // logo
              const Icon(
                Icons.info,
                size: 100,
                color: Colors.grey,
              ),


              const SizedBox(height: 50),
              // Welcome Back!

              Text(
                'Welcome Back!',
                style: TextStyle(
                  color: Colors.grey[700],
                  fontSize: 18,
                ),
              ),

              const SizedBox(height: 25),
              // Username
              TextBoxes(
                controller: usernameController,
                hintText: 'Username',
                obscureText: false,
              ),

              const SizedBox(height: 10),
              // Password
              TextBoxes(
                controller: passwordController,
                hintText: 'Password',
                obscureText: true,
              ),
              // Forgot Password
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.5),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(
                      'Forgot Your Password?',
                      style: TextStyle(color: Colors.grey[600]),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 25),

              // Sign in Button
              Button(
                onTap: SignUser,
              ),

              const SizedBox(height: 40), // This line adds space

// or continue with
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  children: [
                    Expanded(
                      child: Divider(
                        thickness: 1,
                        color: Colors.grey[900],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0),
                      child: Text(
                        'Or continue with',
                        style: TextStyle(color: Colors.grey[700]),
                      ),
                    ),
                    Expanded(
                      child: Divider(
                        thickness: 1,
                        color: Colors.grey[900],
                      ),
                    ),
                  ],
                ),
              ),


              const SizedBox(height: 50),

              // google + apple signs
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  //google button
                  SqTile(imagePath: 'lib/images/google.png'),

                   SizedBox(width: 25),

                  //apple button

                  SqTile(imagePath: 'lib/images/apple.png')

                ],
              ),


              const SizedBox(height: 50),

              // not a member? Register Now

              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                Text('Not a member? ',
              style: TextStyle(color: Colors.grey[700]),
                ),
                const SizedBox(width: 4),
                Text('Join us now!',
                  style: TextStyle(
                    color: Colors.deepPurple, fontWeight: FontWeight.bold
                  ),
                  ),
                
              ],)



            ],
          ),
        ),
      ),
    );
  }
}
