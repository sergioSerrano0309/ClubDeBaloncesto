drop database if exists club_de_baloncesto;
CREATE DATABASE club_de_baloncesto;

USE club_de_baloncesto;

CREATE TABLE Equipos(
  id_equipo INT PRIMARY KEY AUTO_INCREMENT,
  nombre_equipo VARCHAR(50) not null,
  pais VARCHAR(50)
);

CREATE TABLE Categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nombre_categoria VARCHAR(50) not null,
  partidos_jugados INT default 0,
  partidos_ganados INT default 0,
  partidos_perdidos INT default 0
);

CREATE TABLE Entrenadores (
  id_entrenador INTEGER PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) not null,
  apellido VARCHAR(50),
  edad INTEGER,
  experiencia VARCHAR(255),
  id_categoria INTEGER not null,
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

CREATE TABLE Partidos (
  id_partido INT PRIMARY KEY AUTO_INCREMENT,
  fecha DATE not null,
  hora TIME not null,
  lugar VARCHAR(50) not null,
  id_equipo_local INT not null,
  id_equipo_visitante INT not null,
  ganador INT, 
  id_categoria INT,
  FOREIGN KEY (id_equipo_local) REFERENCES Equipos(id_equipo),
  FOREIGN KEY (id_equipo_visitante) REFERENCES Equipos(id_equipo),
  FOREIGN KEY (ganador) REFERENCES Equipos (id_equipo),
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

CREATE TABLE Jugadores (
  id_jugador INT PRIMARY KEY AUTO_INCREMENT,
  nombre_jugador VARCHAR(50) not null,
  apellido_jugador VARCHAR(50),
  fecha_nacimiento DATE,
  posicion VARCHAR(20),
  altura INT,
  peso DECIMAL(4,2),
  dorsal INT CHECK ((dorsal >= 0 AND dorsal <= 99) OR dorsal = 0) not null,
  id_categoria INT,
  es_capitan BOOLEAN DEFAULT 0 not null,
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

CREATE TABLE EstadisticasPorPartido (
  id_estadistica INT PRIMARY KEY AUTO_INCREMENT,
  id_jugador INT,
  id_partido INT,
  puntos INT,
  rebotes INT,
  asistencias INT,
  robos INT,
  tapones INT,
  FOREIGN KEY (id_jugador) REFERENCES Jugadores(id_jugador),
  FOREIGN KEY (id_partido) REFERENCES Partidos(id_partido)
);

CREATE TABLE EstadisticasTotales (
  id_estadistica INT PRIMARY KEY AUTO_INCREMENT,
  id_jugador INT default 0,
  puntos INT default 0,
  rebotes INT default 0,
  asistencias INT default 0,
  robos INT default 0,
  tapones INT default 0,
  FOREIGN KEY (id_jugador) REFERENCES Jugadores(id_jugador)
);

CREATE TABLE Entrenamientos (
  id_entrenamiento INT PRIMARY KEY AUTO_INCREMENT,
  fecha DATE not null,
  duracion TIME,
  lugar VARCHAR(50) not null
);

CREATE TABLE Usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nombre_usuario VARCHAR(50) not null,
  correo_electronico VARCHAR(50) not null,
  contraseña VARCHAR(255) not null,
  tipo_usuario VARCHAR(20) CHECK (tipo_usuario IN ('administrador', 'federado', 'aficionado'))
);

INSERT INTO Equipos (nombre_equipo, pais)
VALUES ('Andratx', 'Spain'),
       ('La Salle', 'Spain');
       
INSERT INTO Categorias (id_categoria, nombre_categoria, partidos_jugados, partidos_ganados, partidos_perdidos)
VALUES (1, 'Junior', 0, 0, 0);

INSERT INTO Partidos (fecha, hora, lugar, id_equipo_local, id_equipo_visitante, id_categoria)
VALUES ('2023-04-05', '20:00:00', 'Poliesportiu Municipal d\Andratx', 1, 2, 1);

INSERT INTO Entrenadores (nombre, apellido, edad, experiencia, id_categoria)
VALUES ('Juan', 'Pérez', 40, '10 años como entrenador en equipos juveniles', 1);

INSERT INTO Jugadores (nombre_jugador, apellido_jugador, fecha_nacimiento, dorsal, posicion, altura, peso, id_categoria, es_capitan)
VALUES
  ('Pablo', 'García', '2008-03-01', 1, 'Base', 185, 75.5, 1, 1),
  ('David', 'López', '2006-09-05', 2,'Alero', 182, 79.2, 1, 0),
  ('Álvaro', 'Martínez', '2004-12-14', 3,'Pivot', 190, 85.1, 1, 0),
  ('Adrián', 'Sánchez', '2005-06-22', 4,'Escolta', 178, 72.8, 1, 0),
  ('Jorge', 'Hernández', '2007-08-18', 5,'Ala-Pivot', 187, 82.3,1, 0);
  

select * from usuarios;
select nombre_usuario,tipo_usuario,contraseña from Usuarios where tipo_usuario = "aficionado" ;

