module.exports = function (sequelize, DataTypes) {
    let alias = 'Comment'; //Este alias se busca como nombre de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        texto_comentario: {
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
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'usuario_id'
        });
        Comment.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'post_id'
        });
    }

    return Comment;
}
