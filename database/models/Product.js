module.exports = function (sequelize, DataTypes) {
    let alias = 'Product'; //Este alias se busca como nombre de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nombre_imagen: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        nombre_producto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
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
        tableName: "productos",
        timestamps: true,
        underscored: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'usuario_id'
        });
        Product.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'post_id'
        });
    }

    return Product;
}
