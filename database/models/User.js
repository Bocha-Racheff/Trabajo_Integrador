module.exports = function (sequelize, DataTypes) {
    let alias = 'User'; //Este alias se busca como nombre de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
            allowNull: true
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        foto_perfil: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'usuario_id'
        });
        User.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'usuario_id'
        });
    }

    return User;
}
