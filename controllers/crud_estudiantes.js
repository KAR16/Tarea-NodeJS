import { conectar } from "../models/db_conectar.js";

var crud_estudiante = {};

crud_estudiante.obtenerTiposSangre = (req, res, next) => {
    conectar.query('SELECT * FROM tipos_sangre', (error, resultados) => {
        if (error) {
            return next(error);
        }
        req.tiposSangre = resultados;
        next();
    });
}; 

crud_estudiante.leer = (req, res) => {
    conectar.query('SELECT * FROM estudiantes', (error, resultadosEstudiantes) => {
        if (error) {
            throw error;
        }

        conectar.query('SELECT * FROM tipos_sangre', (error, resultadosTiposSangre) => {
            if (error) {
                throw error;
            }

            res.render('estudiantes/index', {
                resultado: resultadosEstudiantes,
                tipos_sangre: resultadosTiposSangre // Asegúrate de que esta variable esté correctamente pasada
            });
        });
    });
};


crud_estudiante.cud = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const carnet = req.body.txt_carnet;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_correo;
    const id_tipo_sangre = req.body.txt_tipo_sangre;
    const fecha_nacimiento = req.body.txt_fn;

    if (btn_crear) {
        conectar.query('INSERT INTO estudiantes SET ?', {
            carnet: carnet,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            fecha_nacimiento: fecha_nacimiento,
            correo_electronico: correo_electronico,
            id_tipo_sangre: id_tipo_sangre
        }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });

    }
    if (btn_actualizar) {
        conectar.query('UPDATE estudiantes SET ? WHERE id_estudiante = ?', [{
            carnet: carnet,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            fecha_nacimiento: fecha_nacimiento,
            correo_electronico: correo_electronico,
            id_tipo_sangre: id_tipo_sangre
        }, id], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });

    }
    if (btn_borrar) {
        conectar.query('DELETE FROM estudiantes WHERE id_cliente = ?', [id], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });

    }
};

export { crud_estudiante };
