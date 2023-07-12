const fs = require('fs');
const crypto = require('crypto');

class UserManager {
  constructor() {
    this.filePath = 'Usuarios.json';
  }

  crearUsuario(usuario) {
    const usuarios = this.leerUsuarios();
    const usuarioExistente = usuarios.find(u => u.username === usuario.username);
    if (usuarioExistente) {
      console.log('El nombre de usuario ya existe. Por favor, elija otro.');
      return;
    }

    const hash = this.hashPassword(usuario.password);
    usuario.password = hash;
    usuarios.push(usuario);
    this.guardarUsuarios(usuarios);
    console.log('Usuario creado con éxito.');
  }

  validarUsuario(username, password) {
    const usuarios = this.leerUsuarios();
    const usuario = usuarios.find(u => u.username === username);
    if (!usuario) {
      console.log('El usuario no existe.');
      return;
    }

    const hash = this.hashPassword(password);
    if (usuario.password === hash) {
      console.log('Logueado.');
    } else {
      console.log('La contraseña no coincide.');
    }
  }

  leerUsuarios() {
    try {
      const usuariosData = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(usuariosData);
    } catch (error) {
      return [];
    }
  }

  guardarUsuarios(usuarios) {
    const usuariosData = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(this.filePath, usuariosData, 'utf8');
  }

  hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }
}

// Ejemplo de uso:
const userManager = new UserManager();

const usuario1 = {
  nombre: 'John',
  apellido: 'Doe',
  username: 'johndoe',
  password: 'password1'
};

userManager.crearUsuario(usuario1);
userManager.validarUsuario('johndoe', 'password1');
userManager.validarUsuario('johndoe', 'wrongpassword');