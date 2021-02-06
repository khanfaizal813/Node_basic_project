const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var date = new Date
    const FTP_SERVER_LOGS = sequelize.define('wm_test_model', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        log_type: {
            type: DataTypes.STRING,
        },
        log_data: {
            type: DataTypes.TEXT,
        },
        create: DataTypes.DATE(3),
        created_at: DataTypes.DATE(3),
        updated_at: DataTypes.DATE(3),
        deleted_at: DataTypes.DATE(3)
    });
    return FTP_SERVER_LOGS;
}